import { Fragment } from "react";
import { Container, Grid, Typography } from "@mui/material";
import PaginationComponent from "../../components/Pagination";

interface data {
  id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.jikan.moe/v4/manga`);
  const data = await res.json();

  return { props: { mangas: data } };
}

const mangas = ({ mangas }: any) => {
  if (!mangas) {
    return <>Loading</>;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        {mangas.data.map((manga: data) => (
          <Fragment key={manga.id}>
            <Grid item xs={8} lg={6}>
              <Typography variant="h4">{manga.title}</Typography>

              <img
                src={manga.images.jpg.image_url}
                alt={manga.title}
                width={400}
                height={400}
              />
            </Grid>
          </Fragment>
        ))}
      </Grid>
      <PaginationComponent />
    </Container>
  );
};

export default mangas;
