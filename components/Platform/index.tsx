import { useState } from "react";
import {
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const Platforms = () => {
  const [platform, setPlatform] = useState<string>("");
  console.log(platform);

  const handleChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value);
  };
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
          <MenuItem value={10}>Twenty</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Platforms;
