import React from "react";
import Button from "@mui/material/Button";
import { Task } from "../types/types";

export const Footer: React.FC<{
  onClickRemoveAllTasks: () => void;
  onClickAllTasks: () => void;
  textBottonToggle: boolean;
  state: Task[];
}> = ({
  onClickRemoveAllTasks,
  onClickAllTasks,
  textBottonToggle,
  state,
}): JSX.Element => {
  let textButton = "Отметить всё";
  if (textBottonToggle && state.length) {
    textButton = "Снять отметки";
  }
  return (
    <div className="check-buttons">
      <Button onClick={onClickAllTasks}>{textButton}</Button>
      <Button onClick={onClickRemoveAllTasks}>Очистить</Button>
    </div>
  );
};
