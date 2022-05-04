import { Pagination, Stack } from "@mui/material";

const PaginationComponent = () => {
  return (
    <>
      <Stack spacing={2}>
        <Pagination count={10} color="primary" />
      </Stack>
    </>
  );
};

export default PaginationComponent;
