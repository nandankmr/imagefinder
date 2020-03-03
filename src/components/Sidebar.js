import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import RegisterDialog from "./dialogs/RegisterDialog";
import LoginDialog from "./dialogs/LoginDialog";
import { Link } from "react-router-dom";
import LogoutDialog from "./dialogs/LogoutDialog";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

//Copied from material-ui drawer component

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function Sidebar({ setAuth, auth, setInfo }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div className={classes.list} role="presentation">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <IconButton
          onClick={toggleDrawer("left", false)}
          // style={{ float: "right" }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {!auth.isAuth ? (
          <Fragment>
            <RegisterDialog
              setAuth={setAuth}
              setInfo={setInfo}
              isList={true}
              onClick={toggleDrawer("left", false)}
            />
            <LoginDialog
              setAuth={setAuth}
              setInfo={setInfo}
              isList={true}
              onClick={toggleDrawer("left", false)}
            />
          </Fragment>
        ) : (
          <Fragment>
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "None" }}
              onClick={toggleDrawer("left", false)}
            >
              <ListItem button>
                <ListItemText primary="Home" sty />
              </ListItem>
            </Link>
            <Link
              to="/profile"
              onClick={toggleDrawer("left", false)}
              style={{ color: "inherit", textDecoration: "None" }}
            >
              <ListItem button>
                <ListItemText primary="Profile" />
              </ListItem>
            </Link>

            <LogoutDialog
              setAuth={setAuth}
              onClick={toggleDrawer("left", false)}
              setInfo={setInfo}
              isList={true}
            />
          </Fragment>
        )}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton color="inherit" onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </div>
  );
}
