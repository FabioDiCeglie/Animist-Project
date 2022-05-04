import { useState } from "react";
import { MenuItem, InputLabel, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface platform {
  platform: string;
}

const Platforms = ({ games }: any) => {
  const [platform, setPlatform] = useState("");

  console.log(platform);

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
    console.log(event.target);
    setPlatform(event.target.value as string);
  };

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Platforms
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={platform}
          onChange={handleChange}
          label="Platforms"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {platforms.map((pf: any, i: number) => (
            <div key={i}>
              <MenuItem value={pf}>{pf}</MenuItem>
            </div>
          ))}
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Platforms;
