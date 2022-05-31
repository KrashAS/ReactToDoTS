import React from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  AddTaskAction,
  CheckAllTasksAction,
  RemoveAllTasksAction,
  RemoveTaskAction,
  Task,
  ToggleCheckBox,
} from "../types/types";

export const AddField: React.FC<{
  dispatch: React.Dispatch<
    | AddTaskAction
    | RemoveTaskAction
    | RemoveAllTasksAction
    | CheckAllTasksAction
    | ToggleCheckBox
  >;
  state: Task[];
}> = ({ dispatch, state }) => {
  const [checked, setChecked] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const addTask = () => {
    if (inputValue.trim()) {
      const stateLength = state.length ? state[state.length - 1].id + 1 : 1;

      dispatch({
        type: "ADD_TASK",
        id: stateLength,
        text: inputValue,
        completed: checked,
      });
    }
    setInputValue("");
    setChecked(false);
  };
  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div className="field">
      <Checkbox
        checked={checked}
        onChange={toggleChecked}
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
      />
      <Button>
        <AddIcon onClick={addTask} />
      </Button>
    </div>
  );
};
