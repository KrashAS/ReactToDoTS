import React from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const AddField: React.FC<{
  onClickAdd: () => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  onChangeCheckbox: () => void;
}> = ({ onClickAdd, value, onChange, checked, onChangeCheckbox }) => {
  return (
    <div className="field">
      <Checkbox
        checked={checked}
        onChange={onChangeCheckbox}
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <TextField
        value={value}
        onChange={onChange}
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
      />
      <Button>
        <AddIcon onClick={onClickAdd} />
      </Button>
    </div>
  );
};
