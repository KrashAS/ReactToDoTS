export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export type AddTaskAction = {
  type: "ADD_TASK";
  id: number;
  text: string;
  completed: boolean;
};

export type RemoveTaskAction = {
  type: "REMOVE_TASK";
  payload: number;
};

export type RemoveAllTasksAction = {
  type: "REMOVE_All_TASKS";
};

export type CheckAllTasksAction = {
  type: "CHECK_ALL_TASKS";
  payload: boolean;
};

export type ToggleCheckBox = {
  type: "TOGGLE_CHECKBOX";
  payload: number;
};
