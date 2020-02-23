import React, { useState } from "react";
import Typograaphy from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";

export default function RemoveAccountDialog({ setAuth, setInfo, auth }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const handleRemoveAccount = () => {
    Axios.delete("https://imageseeker.herokuapp.com/user/removeuser", {
      headers: { "x-auth-token": auth.token }
    }).then(res => {
      setInfo(res.data.msg);
      setAuth({ isAuth: false, token: "", user: {} });
    });
    toggle();
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        color="secondary"
        onClick={toggle}
      >
        Delete Account
      </Button>

      <Dialog open={open} onClose={toggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Danger!</DialogTitle>
        <DialogContent>
          <Typograaphy gutterBottom>
            Are you sure? All data will be lost!{" "}
          </Typograaphy>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleRemoveAccount}
            variant="contained"
            color="primary"
          >
            I'm Sure
          </Button>
          <Button
            autoFocus
            onClick={toggle}
            color="secondary"
            variant="contained"
          >
            No, I changed my mind
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
