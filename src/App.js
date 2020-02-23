import React, { useState, useEffect, Fragment } from "react";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import ShowImages from "./components/ShowImages";
import Axios from "axios";
import LoginRegisterDialog from "./components/dialogs/LoginRegisterDialog";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Profile from "./components/Profile";
import { Fab, Typography } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const [openInfo, setOpenInfo] = useState(false);
  const [queryData, setQueryData] = useState({ q: "", source: "", hits: 10 });

  const [info, setInfo] = useState("");
  const [images, setImages] = useState([]);

  const [page, setPage] = useState(1);
  const [ENDPOINT] = useState("https://imageseeker.herokuapp.com/");
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

  const getServerImages = (source, q, hits, page) => {
    setQueryData({ q, source, hits });
    Axios.get(
      `${ENDPOINT}api/${source.toLowerCase()}?q=${q}&hits=${hits}&page=${page}`
    )
      .then(res => {
        setImages(res.data);
        console.log(res.data);
      })
      .catch(console.log);
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
        <Redirect to="/" />
        <Switch>
          <Route path="/" exact>
            <Search
              getServerImages={getServerImages}
              page={page}
              setPage={setPage}
            />
            {images ? (
              <Fragment>
                {images.length === queryData.hits ? (
                  <Fab
                    color="primary"
                    onClick={() => setPage(page + 1)}
                    style={{
                      position: "fixed",
                      zIndex: 2,
                      bottom: "2rem",
                      right: "2rem"
                    }}
                    variant="extended"
                  >
                    <Typography>Next</Typography>
                  </Fab>
                ) : null}

                {page > 1 ? (
                  <Fab
                    onClick={() => setPage(page - 1)}
                    style={{
                      position: "fixed",
                      zIndex: 2,
                      bottom: "2rem",
                      left: "2rem"
                    }}
                    color="secondary"
                    variant="extended"
                  >
                    <Typography>Previous</Typography>
                  </Fab>
                ) : null}
                <ShowImages
                  auth={auth}
                  setAuth={setAuth}
                  images={images}
                  toggle={toggle}
                />
              </Fragment>
            ) : null}
          </Route>
          <Route path="/profile">
            <Profile
              auth={auth}
              setAuth={setAuth}
              toggle={toggle}
              setInfo={setInfo}
            />
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
