import { Fragment, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import PaginationComponent from "../../components/Pagination";

interface data {
  id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  url: string;
  rank: number;
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.jikan.moe/v4/manga`);
  const data = await res.json();

  return { props: { mangas: data } };
}

const Mangas = ({ mangas }: any) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [mangasPerPage, setMangas] = useState<number>(4);
  if (!mangas) {
    return <>Loading</>;
  }

  //PageNumbers
  const pageNumbers = mangas.data.length / mangasPerPage;

  //Get current games
  const indexOfLastMangas = currentPage * mangasPerPage;
  const indexOfFirstPost = indexOfLastMangas - mangasPerPage;
  const currentMangas = mangas.data.slice(indexOfFirstPost, indexOfLastMangas);

  //Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Mangas By Animist</Typography>
      <Box sx={{ mb: 5 }}>
        <PaginationComponent paginate={paginate} pageNumbers={pageNumbers} />
      </Box>
      <Grid container spacing={2}>
        {currentMangas.map((manga: data) => (
          <Fragment key={manga.id}>
            <Grid item xs={8} lg={6}>
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={manga.images.jpg.image_url}
                    alt={manga.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {manga.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Rank: {manga.rank}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={manga.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Check the manga!
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Fragment>
        ))}
      </Grid>
      <PaginationComponent />
    </Container>
  );
};

export default Mangas;
