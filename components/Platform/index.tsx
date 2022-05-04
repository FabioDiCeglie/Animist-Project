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

  //   const platformsGames = games.filter
  return (
    <>
      {" "}
      <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
        <InputLabel>Platform</InputLabel>
        <Select
          value={platform}
          onChange={handleChange}
          autoWidth
          label="Platform"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* {games.map((game: platform) => (
            <>
              <MenuItem value={game.platform}>{game.platform}</MenuItem>
            </>
          ))} */}
        </Select>
      </FormControl>
    </>
  );
};

export default Platforms;
