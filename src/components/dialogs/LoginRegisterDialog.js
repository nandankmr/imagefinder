import React from "react";
import Typograaphy from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";

export default function LoginRegisterDialog({
  open,
  toggle,
  setAuth,
  setInfo
}) {
  return (
    <div>
      <Dialog open={open} onClose={toggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login or Register</DialogTitle>
        <DialogContent dividers>
          <Typograaphy>Login or Register to add to favorites. </Typograaphy>
        </DialogContent>
        <DialogActions>
          <RegisterDialog
            onClick={toggle}
            variant="outlined"
            setAuth={setAuth}
            setInfo={setInfo}
          />
          <LoginDialog
            onClick={toggle}
            setAuth={setAuth}
            setInfo={setInfo}
            variant="outlined"
          />

          <Button
            autoFocus
            onClick={toggle}
            color="secondary"
            variant="contained"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
