import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

import ZoomInIcon from "@material-ui/icons/ZoomIn";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogActions, Button } from "@material-ui/core";

export default function SearchImages({ images }) {
  const [focus, setFocus] = useState("");
  const useStyles = makeStyles(theme => ({
    appBar: {
      position: "relative"
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = img => {
    setFocus(img);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} cols={3} style={{ minHeight: "80vh" }}>
        {images.map(tile => (
          <GridListTile key={tile.previewURL}>
            <img
              src={tile.webformatURL}
              alt={tile.tags}
              onClick={() => {
                handleClickOpen(tile.largeImageURL);
              }}
            />
            <GridListTileBar
              title={tile.tags}
              subtitle={<span>by: {tile.user}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                  onClick={() => {
                    handleClickOpen(tile.largeImageURL);
                  }}
                  name={tile.webformatURL}
                >
                  <ZoomInIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Dialog
        style={{ padding: "0" }}
        fullScreen
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            <a href={focus} download target="_blank" title="Download">
              <IconButton edge="end" color="inherit" aria-label="download">
                <GetAppIcon />
              </IconButton>
            </a>
          </Toolbar>
        </AppBar>

        <DialogContent dividers style={{ padding: "0", margin: "auto" }}>
          <img
            style={{ maxWidth: "100%", maxHeight: "100%", margin:"auto" }}
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
