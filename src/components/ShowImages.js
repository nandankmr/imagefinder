import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./css/ShowImages.css";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent } from "@material-ui/core";
import OneImage from "./OneImage";

export default function ShowImages({ auth, setAuth, images, toggle }) {
  const [focus, setFocus] = useState("");
  const [open, setOpen] = React.useState(false);
  const useStyles = makeStyles(theme => ({
    appBar: {
      position: "relative"
    },
    root: {
      display: "flex",
      // backgroundColor: "#ddd",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden"
      // backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 500,
      height: 450
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  }));

  const classes = useStyles();

  const handleClickOpen = img => {
    setFocus(img);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className="container">
        {images.map(image => (
          <OneImage
            toggle={toggle}
            favorite={
              auth.isAuth &&
              auth.user.favorites.find(value => value === image.id)
                ? true
                : false
            }
            setAuth={setAuth}
            auth={auth}
            key={image.id}
            image={image}
            handleClickOpen={handleClickOpen}
          />
        ))}
      </div>

      <Dialog
        style={{ marginTop: 0 }}
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="sm"
      >
        <DialogContent dividers style={{ padding: 0 }}>
          <img
            style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto" }}
            src={focus}
            alt=""
          />
        </DialogContent>
      </Dialog>

      <footer
        style={{
          height: "2rem",
          marginTop: "1rem",
          background: "#333",
          bottom: "0px",
          width: "100%",
          color: "#eee",
          textAlign: "center",
          paddingTop: "1rem"
        }}
      >
        Nandan Kumar, &copy; 2020
      </footer>
    </div>
  );
}
