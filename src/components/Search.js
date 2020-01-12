import React, { useState, useEffect } from "react";
import {
  Select,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  AppBar,
  Typography
} from "@material-ui/core";
import Axios from "axios";
import SearchImages from "./SearchImages";

export default function Search() {
  const [images, setImages] = useState([]);
  const [q, setQ] = useState("");
  const [hits, setHits] = useState(5);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const getImages = () => {
    const key = "14838845-97aff471166809fe19bd2c3a9";
    Axios.get(
      "https://pixabay.com/api/?key=" +
        key +
        "&q=" +
        q +
        "&image_type=photo&per_page=" +
        hits
    )
      .then(res => {
        setImages(res.data.hits);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => getImages(), [hits, q]);

  return (
    <React.Fragment>
      <div
        style={{
          background: "#333",
          textAlign: "center",
          color: "#eee",
          padding: "10px",
          marginBottom: "1rem"
        }}
      >
        <h1 style={{ margin: 0 }}>Image Finder</h1>
      </div>

      <TextField
        id="outlined-basic"
        label="Search Images"
        variant="outlined"
        defaultValue={q}
        fullWidth={true}
        onChange={e => setQ(e.target.value)}
      />
      <InputLabel style={{ width: "100px", marginTop: "5px" }}>
        <em>Hits</em>
      </InputLabel>
      <Select
        style={{ width: "100px", marginBottom: "8px" }}
        //   labelId="demo-controlled-open-select-label"
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
      </Select>

      {images.length ? <SearchImages images={images} /> : " "}
    </React.Fragment>
  );
}
