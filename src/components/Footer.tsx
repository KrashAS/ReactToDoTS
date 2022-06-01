import React from "react";
import Button from "@mui/material/Button";
import { Task } from "../types/types";

export const Footer: React.FC<{
  onClickRemoveAllTasks: () => void;
  onClickAllTasks: () => void;
  state: Task[];
}> = ({ onClickRemoveAllTasks, onClickAllTasks, state }): JSX.Element => {
  const allCompleted = state.every((tasks) => tasks.completed);
  let textButton = allCompleted ? "Снять отметки" : "Отметить всё";

  return (
    <div className="check-buttons">
      <Button onClick={onClickAllTasks}>{textButton}</Button>
      <Button onClick={onClickRemoveAllTasks}>Очистить</Button>
    </div>
  );
};
