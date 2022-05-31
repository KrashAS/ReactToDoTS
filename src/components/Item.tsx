import * as React from "react";
import {
  IconButton,
  Checkbox,
  ListItem,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Item: React.FC<{
  text: string;
  completed: boolean;
  toggleCheckBox: () => void;
  onClickRemove: () => void;
}> = ({ text, completed, onClickRemove, toggleCheckBox }) => {
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickOpen = () => {
    setOpenAlert(true);
  };

  const handleCloseFalse = () => {
    setOpenAlert(false);
  };

  const handleCloseTrue = () => {
    onClickRemove();
  };

  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox
          checked={completed}
          onChange={toggleCheckBox}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
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
            open={openAlert}
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
