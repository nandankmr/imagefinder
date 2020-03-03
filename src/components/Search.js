import React, { useState, useEffect } from "react";
import {
  Select,
  TextField,
  InputLabel,
  MenuItem,
  Card,
  Button,
  Typography,
  FormControl
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./css/Search.css";
import Inputbar from "./Inputbar";

export default function Search({ getServerImages, page, setPage }) {
  const [q, setQ] = useState("");
  const [hits] = useState(15);
  const [] = useState(false);
  const [openSource, setOpenSource] = useState(false);
  const [source, setSource] = useState("Pixabay");

  useEffect(() => {
    // console.log(images);

    getServerImages(source, q, hits, page);
  }, [hits, page]);

  useEffect(() => {
    if (page !== 1) setPage(1);
    else getServerImages(source, q, hits, page);
  }, [source]);

  return (
    <React.Fragment>
      <Card raised className="card">
        <TextField
          className="input"
          name="search"
          label="Search Images"
          variant="outlined"
          defaultValue={q}
          fullWidth={true}
          onChange={e => setQ(e.target.value)}
          onKeyPress={e => {
            if (e.key === "Enter") {
              page === 1 ? getServerImages(source, q, hits) : setPage(1);
            }
          }}
        />

        {/* <Inputbar
          q={q}
          setQ={setQ}
          page={page}
          getServerImages={getServerImages}
          hits={hits}
          source={source}
          setPage={setPage}
        /> */}
        <FormControl style={{ minWidth: "7rem", margin: " 0 0.5rem" }}>
          {" "}
          <InputLabel>Source</InputLabel>
          <Select
            open={openSource}
            onClose={() => setOpenSource(false)}
            onOpen={() => setOpenSource(true)}
            value={source}
            onChange={e => setSource(e.target.value)}
            variant="filled"
          >
            <MenuItem value={"Pixabay"}>Pixabay</MenuItem>
            <MenuItem value={"Unsplash"}>Unsplash</MenuItem>
            <MenuItem value={"Pexels"}>Pexels</MenuItem>
            <MenuItem value={"Giphy"}>Giphy</MenuItem>
          </Select>
        </FormControl>
        <Button
          style={{ padding: "0 15" }}
          variant="contained"
          color="secondary"
          className="btn"
          startIcon={<SearchIcon />}
          onClick={() =>
            page === 1 ? getServerImages(source, q, hits) : setPage(1)
          }
        >
          <Typography>Search</Typography>
        </Button>
      </Card>
      {/* <InputLabel style={{ width: "100px", marginTop: "5px" }}>
        <em>Hits</em>
      </InputLabel>
      <Select
        style={{ width: "100px", marginBottom: "8px" }}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        value={hits}
        onChange={e => setHits(e.target.value)}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select> */}
    </React.Fragment>
  );
}
