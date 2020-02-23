import React, { Fragment } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { IconButton } from "@material-ui/core";
import Axios from "axios";

const AddFavorite = ({ favorite, auth, setAuth, toggle, image }) => {
  const {
    user: { name, email, favorites },
    token,
    isAuth
  } = auth;

  const addfavorite = () => {
    Axios.put("https://imageseeker.herokuapp.com/user/addfavorite", image, {
      headers: { "x-auth-token": auth.token }
    })
      .then(res => {
        setAuth({
          isAuth,
          token,
          user: { name, email, favorites: [res.data, ...favorites] }
        });
      })
      .catch(err => {
        if (err.response.status === 401) {
          toggle();
        }
      });
  };

  const removefavorite = () => {
    Axios.put("https://imageseeker.herokuapp.com/user/removefavorite", image, {
      headers: { "x-auth-token": auth.token }
    }).then(res => {
      setAuth({
        isAuth,
        token,
        user: {
          name,
          email,
          favorites: favorites.filter(value => value !== res.data)
        }
      });
    });
  };

  return (
    <Fragment>
      {favorite ? (
        <IconButton
          title="Remove from favorites"
          onClick={removefavorite}
          style={{ margin: 0, padding: 7 }}
        >
          <FavoriteIcon color="secondary" />
        </IconButton>
      ) : (
        <IconButton
          title="Add to favorites"
          onClick={addfavorite}
          style={{ margin: 0, padding: 7 }}
        >
          <FavoriteBorderIcon />
        </IconButton>
      )}
    </Fragment>
  );
};

export default AddFavorite;
