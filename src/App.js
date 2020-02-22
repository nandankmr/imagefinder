import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import ShowImages from "./components/ShowImages";
import Axios from "axios";
import LoginRegisterDialog from "./components/dialogs/LoginRegisterDialog";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Profile from "./components/Profile";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const [openInfo, setOpenInfo] = useState(false);
  const [info, setInfo] = useState("");
  const [images, setImages] = useState([]);
  const [time, setTime] = useState(setTimeout(() => {}, 1000));
  const [page] = useState(1);
  const [ENDPOINT] = useState("http://localhost:5000/api/");
  const [auth, setAuth] = useState({ isAuth: false, token: "", user: {} });

  const handleCloseMessage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenInfo(false);
  };

  useEffect(() => {
    if (info) {
      setOpenInfo(true);
      setTimeout(() => setInfo(""), 4000);
    }
  }, [info]);

  const getServerImages = (source, q, hits) => {
    clearTimeout(time);

    setTime(
      setTimeout(
        () => {
          Axios.get(
            `${ENDPOINT}${source.toLowerCase()}/?q=${q}&hits=${hits}&page=${page}`
          )
            .then(res => {
              setImages(res.data);
              // console.log(res.data);
            })
            .catch(err => console.log(err));
        },
        source === "Unsplash" ? 1000 : 0
      )
    );
  };

  return (
    <div className="App">
      <Router>
        <Navbar
          auth={auth}
          setAuth={setAuth}
          setInfo={setInfo}
          toggle={toggle}
        />
        <Switch>
          <Route path="/" exact>
            <Search getServerImages={getServerImages} />
            {images ? (
              <ShowImages
                auth={auth}
                setAuth={setAuth}
                images={images}
                toggle={toggle}
              />
            ) : null}
          </Route>
          <Route path="/profile">
            <Profile auth={auth} setAuth={setAuth} toggle={toggle} />
          </Route>
        </Switch>
      </Router>

      <Snackbar
        open={openInfo}
        autoHideDuration={4000}
        onClose={handleCloseMessage}
      >
        <Alert onClose={handleCloseMessage} severity="success">
          {info}
        </Alert>
      </Snackbar>
      <LoginRegisterDialog
        open={open}
        toggle={toggle}
        setAuth={setAuth}
        setInfo={setInfo}
      />
    </div>
  );
}

export default App;
