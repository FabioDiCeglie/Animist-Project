import { useState } from "react";
import { MenuItem, InputLabel, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface platform {
  platform: string;
}

const Platforms = ({ games, platformSelected }: any) => {
  const [platform, setPlatform] = useState("");

  let uniquePlatforms = [
    Array.from(
      new Set(
        games.map((game: platform) => {
          return game.platform;
        })
      )
    ),
  ];

  const platforms = uniquePlatforms.flat();

  const handleChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value as string);
    platformSelected(event.target.value as string);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Platforms
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={platform}
          onChange={handleChange}
          autoWidth
          label="Platforms"
        >
          {platforms.map((pf: any, i: number) => (
            <MenuItem key={i} value={pf}>
              {pf}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Platforms;
