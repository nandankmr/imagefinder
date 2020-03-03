import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./css/ShowImages.css";
import Dialog from "@material-ui/core/Dialog";
import {
  DialogContent,
  DialogActions,
  IconButton,
  Typography
} from "@material-ui/core";
import OneImage from "./OneImage";
import CloseIcon from "@material-ui/icons/Close";
import GetAppIcon from "@material-ui/icons/GetApp";

export default function ShowImages({ auth, setAuth, images, toggle }) {
  const [focus, setFocus] = useState({});
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

  const handleClickOpen = (img, download) => {
    setFocus({ img, download });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {images.length ? (
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
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Typography
            style={{ color: "#444", marginTop: "2rem", textAlign: "center" }}
          >
            Opps... No images found. Here is a random image for you
          </Typography>
          <img
            alt=""
            style={{ maxHeight: "70vh", maxWidth: "100vw" }}
            src="https://source.unsplash.com/random"
          />
        </div>
      )}

      <Dialog
        style={{ margin: 0, padding: 0 }}
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="lg"
      >
        <DialogActions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* <a
            href={focus.download || focus.img}
            style={{
              color: "#555",
              marginBottom: "5px",
              padding: 0,
              height: "0.5rem"
            }}
            target="_blank"
          >
            <GetAppIcon />
          </a> */}
          <a href={focus.download || focus.img} target="_blank">
            <IconButton style={{ margin: 0, padding: 0 }}>
              <GetAppIcon />
            </IconButton>
          </a>
          <IconButton onClick={handleClose} style={{ margin: 0, padding: 0 }}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogContent style={{ padding: 0 }}>
          <img
            style={{ maxWidth: "100%", maxHeight: "89vh", margin: "auto" }}
            src={focus.img}
            alt=""
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
