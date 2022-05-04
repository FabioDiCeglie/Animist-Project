/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import PaginationComponent from "../../components/Pagination";
import Platforms from "../../components/Platform";

interface data {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  short_description: string;
  game_url: string;
}

export async function getServerSideProps() {
  const res = await fetch(`https://www.freetogame.com/api/games`);
  const data = await res.json();

  return { props: { games: data } };
}

const Games = ({ games }: any) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [gamesPerPage, setGames] = useState<number>(9);

  if (!games) {
    return <>Loading</>;
  }

  //PageNumbers
  const pageNumbers = games.length / gamesPerPage;

  //Get current games
  const indexOfLastGames = currentPage * gamesPerPage;
  const indexOfFirstPost = indexOfLastGames - gamesPerPage;
  const currentGames = games.slice(indexOfFirstPost, indexOfLastGames);

  //Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container sx={{ mt: 5 }}>
      <Box sx={{ mb: 5 }}>
        <PaginationComponent paginate={paginate} pageNumbers={pageNumbers} />
        <Platforms games={games} />
      </Box>
      <Grid container spacing={5}>
        {currentGames.map((game: data) => (
          <Fragment key={game.id}>
            <Grid item xs={8} lg={4}>
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={game.thumbnail}
                    alt={game.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {game.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {game.short_description}
                      {game.platform}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={game.game_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Check the game!
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Games;
