import React from "react";
import { Card, CardMedia, CardHeader, CardActions } from "@material-ui/core";
import "./css/OneImage.css";
import AddFavorite from "./AddFavorite";

const OneImage = ({
  image,
  handleClickOpen,
  auth,
  favorite,
  setAuth,
  toggle
}) => {
  return (
    <Card key={image.id} raised={true} className="box">
      <CardHeader
        className="header"
        style={{ paddingTop: "5px", paddingBottom: "5px" }}
        title={
          image.tags && image.tags.length > 25
            ? image.tags.substring(0, 25) + "..."
            : image.tags
        }
        titleTypographyProps={{ variant: "body1" }}
        subheader={image.user}
      />
      <CardMedia
        image={image.webformatURL}
        className="image"
        onClick={() => {
          handleClickOpen(image.largeImageURL, image.download);
        }}
      />

      <CardActions
        disableSpacing
        className="cardAction"
        style={{ margin: 0, padding: 0 }}
      >
        <AddFavorite
          favorite={favorite}
          auth={auth}
          setAuth={setAuth}
          toggle={toggle}
          image={image}
        />
      </CardActions>
    </Card>
  );
};

export default OneImage;
