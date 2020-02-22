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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function LoginDialog({ setAuth, setInfo, variant, onClick }) {
  const [open, setOpen] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const toggle = () => {
    setOpen(!open);
    setPassword("");
    setEmail("");
  };

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setMessage("Enter all fields");
    } else {
      Axios.post("http://localhost:5000/user/login", {
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
        .catch(err => setMessage(err.response.data.msg));
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
      <Button color="inherit" variant={variant} onClick={toggle}>
        Login
      </Button>

      <Dialog open={open} onClose={toggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
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
