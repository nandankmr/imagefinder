import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import RegisterDialog from "./dialogs/RegisterDialog";
import LoginDialog from "./dialogs/LoginDialog";
import "./css/Navbar.css";
import LogoutDialog from "./dialogs/LogoutDialog";
import Profile from "./Profile";
import { Link, BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import { Divider } from "@material-ui/core";

const Navbar = ({ setAuth, auth, setInfo }) => {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar className="tool">
          <div>
            <IconButton
              edge="start"
              className="menu"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="title">
              <Link style={{ color: "white", textDecoration: "None" }} to="/">
                {" "}
                Image Finder
              </Link>
            </Typography>
          </div>
          <div>
            {!auth.isAuth ? (
              <Fragment>
                <RegisterDialog setAuth={setAuth} setInfo={setInfo} />
                <Divider color="secondary" orientation="vertical" />
                <LoginDialog setAuth={setAuth} setInfo={setInfo} />
              </Fragment>
            ) : (
              <Fragment>
                <Link to="/" style={{ color: "white", textDecoration: "None" }}>
                  <Button color="inherit">Home</Button>
                </Link>
                <Link
                  to="/profile"
                  style={{ color: "white", textDecoration: "None" }}
                >
                  <Button color="inherit">Profile</Button>
                </Link>

                <LogoutDialog setAuth={setAuth} setInfo={setInfo} />
              </Fragment>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
