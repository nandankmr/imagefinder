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

export default function LoginDialog({
  setAuth,
  setInfo,
  variant,
  onClick,
  isList
}) {
  const [open, setOpen] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(false);

  const toggle = () => {
    setOpen(!open);
    setPassword("");
    setEmail("");
  };

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setMessage("Enter all fields");
    } else {
      setProgress(true);
      Axios.post("https://imageseeker.herokuapp.com/user/login", {
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
          setInfo("You are logged in");
          toggle();
          if (onClick) onClick();
        })
        .catch(err =>
          err.response
            ? setMessage(err.response.data.msg)
            : setMessage("Please check your network")
        )
        .finally(() => setProgress(false));
    }
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
        <ListItem button onClick={toggle}>
          <ListItemText primary="Login" />
        </ListItem>
      ) : (
        <Button color="inherit" variant={variant} onClick={toggle}>
          Login
        </Button>
      )}

      <Dialog open={open} onClose={toggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        {progress ? <LinearProgress /> : null}
        <DialogContent dividers>
          <TextField
            autoFocus
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
          <Button onClick={handleLogin} variant="contained" color="primary">
            Login
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
