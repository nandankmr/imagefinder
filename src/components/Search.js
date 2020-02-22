import React, { useState, useEffect } from "react";
import {
  Select,
  TextField,
  InputLabel,
  MenuItem,
  Paper,
  Card,
  Button,
  Typography
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./css/Search.css";

export default function Search({ getServerImages }) {
  const [q, setQ] = useState("");
  const [hits, setHits] = useState(10);
  const [open, setOpen] = useState(false);
  const [openSource, setOpenSource] = useState(false);
  const [source, setSource] = useState("Pixabay");

  useEffect(() => {
    // console.log(images);
    getServerImages(source, q, hits);
  }, [hits, source]);

  return (
    <React.Fragment>
      <Card raised className="card">
        <TextField
          className="input"
          label="Search Images"
          variant="outlined"
          defaultValue={q}
          fullWidth={true}
          onChange={e => setQ(e.target.value)}
          onKeyPress={e =>
            e.key == "Enter" ? () => getServerImages(source, q, hits) : null
          }
        />
        <Button
          style={{ padding: "0 15" }}
          variant="contained"
          color="secondary"
          className="btn"
          startIcon={<SearchIcon />}
          onClick={() => getServerImages(source, q, hits)}
        >
          <Typography>Search</Typography>
        </Button>
      </Card>
      <InputLabel style={{ width: "100px", marginTop: "5px" }}>
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
      </Select>

      <InputLabel style={{ width: "100px", marginTop: "5px" }}>
        <em>Source</em>
      </InputLabel>
      <Select
        style={{ width: "100px", marginBottom: "8px" }}
        open={openSource}
        onClose={() => setOpenSource(false)}
        onOpen={() => setOpenSource(true)}
        value={source}
        onChange={e => setSource(e.target.value)}
      >
        <MenuItem value={"Pixabay"}>Pixabay</MenuItem>
        <MenuItem value={"Unsplash"}>Unsplash</MenuItem>
        <MenuItem value={"Pexels"}>Pexels</MenuItem>
        <MenuItem value={"Giphy"}>Giphy</MenuItem>
      </Select>
    </React.Fragment>
  );
}
