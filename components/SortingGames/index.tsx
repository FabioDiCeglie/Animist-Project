import { useState } from "react";
import { MenuItem, InputLabel, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Sorting = ({ sortSelected }: any) => {
  const [sorting, setSorting] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSorting(event.target.value as string);
    sortSelected(event.target.value as string);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sorting}
          onChange={handleChange}
          autoWidth
          label="Sort"
        >
          <MenuItem value="release-date">Release Date</MenuItem>
          <MenuItem value="popularity">Popularity</MenuItem>
          <MenuItem value="alphabetical">Alphabetical</MenuItem>
          <MenuItem value="relevance">Relevance</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Sorting;
