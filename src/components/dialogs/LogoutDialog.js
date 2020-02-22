import React, { useState } from "react";
import Typograaphy from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function LogoutDialog({ setAuth, setInfo }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    setAuth({ isAuth: false, token: "", user: {} });
    setInfo("You are logged out");
    toggle();
  };

  return (
    <div>
      <Button color="inherit" onClick={toggle}>
        Logout
      </Button>

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
