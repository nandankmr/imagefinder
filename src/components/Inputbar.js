import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Axios from "axios";

export default function Inputbar({
  q,
  setQ,
  page,
  getServerImages,
  source,
  hits,
  setPage
}) {
  const [words, setWords] = useState([]);
  // const [q, setQ] = useState("");

  const getServerWords = w => {
    Axios.get(`https://api.datamuse.com/sug?s=${w}`).then(res =>
      setWords(res.data.map(v => v.word))
    );
  };

  return (
    <Autocomplete
      onChange={e => console.log(e.target)}
      id="combo-box-demo"
      options={words}
      style={{ width: 300 }}
      autoComplete
      renderInput={params => (
        <TextField
          className="input"
          name="search"
          label="Search Images"
          variant="outlined"
          defaultValue={q}
          fullWidth={true}
          onChange={e => {
            getServerWords(e.target.value);
            setQ(e.target.value);
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              page === 1 ? getServerImages(source, q, hits) : setPage(1);
            }
          }}
          {...params}
          variant="outlined"
        />
      )}
    />
  );
}
