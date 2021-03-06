import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Axios from "axios";
import { LinearProgress } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function RegisterDialog({
  setAuth,
  setInfo,
  variant,
  onClick,
  isList
}) {
  const [open, setOpen] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(false);

  const toggle = () => {
    setOpen(!open);
    setName("");
    setPassword("");
    setEmail("");
  };
  const regex = new RegExp(
    "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$"
  );

  const handleRegister = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setMessage("Enter all fields");
    } else if (regex.test(email.trim())) {
      setProgress(true);
      Axios.post("https://imageseeker.herokuapp.com/user/register", {
        name,
        email,
        password
      })
        .then(user => {
          console.log(user);
          setAuth({
            isAuth: true,
            token: user.data.token,
            user: user.data.user
          });
          setInfo("Welcome, " + user.data.user.name + "!");
          toggle();
          if (onClick) onClick();
        })
        .catch(err =>
          err.response
            ? setMessage(err.response.data.msg)
            : setMessage("Please check your network")
        )
        .finally(() => setProgress(false));
    } else setMessage("Enter a valid email id");
  };

  const handleCloseMessage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenMessage(false);
  };

  useEffect(() => {
    if (message) {
      setOpenMessage(true);
      setTimeout(() => setMessage(""), 6000);
    }
  }, [message]);

  return (
    <div>
      {isList ? (
        <ListItem button>
          <ListItemText primary="Register" onClick={toggle} />
        </ListItem>
      ) : (
        <Button color="inherit" variant={variant} onClick={toggle}>
          Register
        </Button>
      )}
      <Dialog open={open} onClose={toggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        {progress ? <LinearProgress /> : null}
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRegister} variant="contained" color="primary">
            Register
          </Button>
          <Button onClick={toggle} color="secondary" variant="contained">
            Cancel
          </Button>
        </DialogActions>
        <Snackbar
          open={openMessage}
          autoHideDuration={6000}
          onClose={handleCloseMessage}
        >
          <Alert onClose={handleCloseMessage} severity="error">
            {message}
          </Alert>
        </Snackbar>
      </Dialog>
    </div>
  );
}
