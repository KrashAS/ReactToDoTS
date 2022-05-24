import * as React from "react";
import { IconButton, Checkbox, ListItem, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Item: React.FC<{
  text: string;
  completed: boolean;
  onClickRemove: () => void;
}> = ({ text, completed, onClickRemove }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseFalse = () => {
    setOpen(false);
  };

  const handleCloseTrue = () => {
    onClickRemove();
  };

  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          defaultChecked={completed}
        />
        <Typography className="item-text">{text}</Typography>
        <div className="item-buttons d-flex">
          <IconButton>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton onClick={handleClickOpen}>
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
          <Dialog
            open={open}
            onClose={handleCloseTrue}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Внимание! Вы действительно хотите удалить задачу?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseFalse}>Нет</Button>
              <Button onClick={handleCloseTrue} autoFocus>
                Да
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </ListItem>
  );
};
