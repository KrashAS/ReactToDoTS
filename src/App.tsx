import React from "react";
import { Paper, Divider, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";
import { Footer } from "./components/Footer";
import type {
  AddTaskAction,
  ToggleCheckBox,
  RemoveTaskAction,
  CheckAllTasksAction,
  RemoveAllTasksAction,
} from "./types/types";
import { InitialState } from "./types/InitialState";

function reducer(
  state: InitialState,
  action:
    | AddTaskAction
    | RemoveTaskAction
    | RemoveAllTasksAction
    | CheckAllTasksAction
    | ToggleCheckBox
) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed,
        },
      ];
    case "REMOVE_TASK":
      return state.filter((_, i) => i !== action.payload);
    case "REMOVE_All_TASKS":
      return [];
    case "TOGGLE_CHECKBOX":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case "CHECK_ALL_TASKS":
      return state.map((task) =>
        !task.completed || task.completed
          ? { ...task, completed: !action.payload }
          : { ...task, completed: action.payload }
      );
    default:
      return state;
  }
}

function App(): JSX.Element {
  const [toggleCheck, setToggleCheck] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, []);

  const removeTask = (index: number) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: index,
    });
  };
  const removeAllTasks = () => {
    dispatch({
      type: "REMOVE_All_TASKS",
    });
  };

  const toggleCheckBox = (id: number) => {
    dispatch({
      type: "TOGGLE_CHECKBOX",
      payload: id,
    });
  };
  const checkAllTasks = () => {
    setToggleCheck((prev) => !prev);
    dispatch({ type: "CHECK_ALL_TASKS", payload: toggleCheck });
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField dispatch={dispatch} state={state} />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state.map((task, i) => (
            <Item
              key={task.id}
              text={task.text}
              completed={task.completed}
              onClickRemove={() => removeTask(i)}
              toggleCheckBox={() => toggleCheckBox(task.id)}
            />
          ))}
        </List>
        <Divider />
        <Footer
          onClickRemoveAllTasks={removeAllTasks}
          onClickAllTasks={checkAllTasks}
          textBottonToggle={toggleCheck}
          state={state}
        />
      </Paper>
    </div>
  );
}

export default App;
