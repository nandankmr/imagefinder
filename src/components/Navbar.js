import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import RegisterDialog from "./dialogs/RegisterDialog";
import LoginDialog from "./dialogs/LoginDialog";
import "./css/Navbar.css";
import LogoutDialog from "./dialogs/LogoutDialog";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
import Sidebar from "./Sidebar";

const Navbar = ({ setAuth, auth, setInfo }) => {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar className="tool">
          <div className="title">
            <Sidebar setAuth={setAuth} auth={auth} setInfo={setInfo} />
            <Typography variant="h6" className="title">
              <Link style={{ color: "white", textDecoration: "None" }} to="/">
                {" "}
                Image Finder
              </Link>
            </Typography>
          </div>
          <div className="navmenu">
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
