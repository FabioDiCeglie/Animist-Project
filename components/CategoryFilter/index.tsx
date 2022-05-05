import { useState } from "react";
import { MenuItem, InputLabel, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface platform {
  genre: string;
}

const Categories = ({ games, genreSelected }: any) => {
  const [category, setCategory] = useState("");

  let uniqueCategories = [
    Array.from(
      new Set(
        games.map((game: platform) => {
          return game.genre;
        })
      )
    ),
  ];

  const categories = uniqueCategories.flat();

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    genreSelected(event.target.value as string);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleChange}
          autoWidth
          label="Genre"
        >
          <MenuItem value="">All</MenuItem>
          {categories.map((c: any, i: number) => (
            <MenuItem key={i} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Categories;
