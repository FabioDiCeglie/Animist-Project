import { useState } from "react";
import { Pagination, Box } from "@mui/material";

const PaginationComponent = ({ pageNumbers, paginate }: any) => {
  const [page, setPage] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    paginate(value);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Pagination
          count={parseInt(pageNumbers)}
          color="primary"
          page={page}
          onChange={handleChange}
        />
      </Box>
    </>
  );
};

export default PaginationComponent;
