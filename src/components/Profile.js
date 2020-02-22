import React, { Fragment, useState, useEffect } from "react";
import { Card, CardHeader, Avatar, Typography } from "@material-ui/core";
import Axios from "axios";
import ShowImages from "./ShowImages";
import "./css/Profile.css";
import { Redirect } from "react-router-dom";

const Profile = ({ auth, setAuth, toggle }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/user/getfavorites", {
      headers: { "x-auth-token": auth.token }
    }).then(res => {
      console.log(res.data);
      setFavorites(res.data);
    });
  }, [setAuth]);
  return auth.isAuth ? (
    <Fragment>
      <Card className="profile-card">
        <CardHeader
          style={{
            height: "25vh",
            margin: "auto"
          }}
          avatar={
            <Avatar style={{ backgroundColor: "red" }}>
              {auth.user.name[0]}
            </Avatar>
          }
          title={auth.user.name}
          subheader={"Email: " + auth.user.email}
          titleTypographyProps={{ variant: "h5" }}
        />
        <Typography
          variant="h5"
          style={{
            textAlign: "Center",
            marginBottom: "1rem",
            padding: "3px",
            borderBottom: "1px dotted #444"
          }}
        >
          Favorites
        </Typography>
        <ShowImages images={favorites} auth={auth} setAuth={setAuth} />
      </Card>
    </Fragment>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
