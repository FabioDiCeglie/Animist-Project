import { useState } from "react";
import { Pagination, Stack, Typography } from "@mui/material";

const PaginationComponent = ({ pageNumbers, paginate }: any) => {
  const [page, setPage] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    paginate(value);
  };

  return (
    <>
      <Typography>Page: {page}</Typography>
      <Stack spacing={2}>
        <Pagination
          count={parseInt(pageNumbers)}
          color="primary"
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default PaginationComponent;
