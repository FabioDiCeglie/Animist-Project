import { useState } from "react";
import {
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface platform {
  platform: string;
}

const Platforms = ({ games }: any) => {
  const [platform, setPlatform] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value);
  };

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

  return (
    <>
      {" "}
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Platform</InputLabel>
        <Select
          value={platform}
          onChange={handleChange}
          autoWidth
          label="Platform"
        >
          <MenuItem value="">None</MenuItem>
          {platforms.map((pf: any, i: number) => (
            <div key={i}>
              <MenuItem value={pf} key={i}>
                {pf}
              </MenuItem>
            </div>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Platforms;
