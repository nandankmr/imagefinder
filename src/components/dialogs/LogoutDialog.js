import React, { useState } from "react";
import Typograaphy from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default function LogoutDialog({ setAuth, setInfo, isList, onClick }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    setAuth({ isAuth: false, token: "", user: {} });
    setInfo("You are logged out");
    toggle();
    if (onClick) onClick();
  };

  return (
    <div>
      {isList ? (
        <ListItem button onClick={toggle}>
          <ListItemText primary="Logout" />
        </ListItem>
      ) : (
        <Button color="inherit" onClick={toggle}>
          Logout
        </Button>
      )}

      <Dialog open={open} onClose={toggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Confirm Logout</DialogTitle>
        <DialogContent>
          <Typograaphy gutterBottom>
            Are you sure you want to logout?{" "}
          </Typograaphy>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogout} variant="contained" color="primary">
            Yes
          </Button>
          <Button
            autoFocus
            onClick={toggle}
            color="secondary"
            variant="contained"
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
