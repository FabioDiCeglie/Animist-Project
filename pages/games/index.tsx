/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useEffect } from "react";
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
import Platforms from "../../components/Platform";
import Categories from "../../components/CategoryFilter";

export async function getServerSideProps(context: any) {
  const res = await fetch(`https://www.freetogame.com/api/games`);
  const data = await res.json();
  if (!data) {
    throw new Error("Failed to load products from the API");
  }

  return { props: { games: data } };
}

interface data {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  short_description: string;
  game_url: string;
}

const Games = ({ games }: any) => {
  const [allGames, setAllGames] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [gamesPerPage, setGames] = useState<number>(9);
  const [platform, setPlatform] = useState<string>("");
  const [genre, setGenre] = useState<string>("");

  useEffect(() => {
    setAllGames(games);

    if (genre !== "") {
      const dataFiltered = games.filter((game: any) => {
        return game.genre.includes(genre);
      });
      setAllGames(dataFiltered);
    }

    if (platform !== "") {
      const dataFiltered = games.filter((game: any) => {
        return game.platform.includes(platform);
      });
      setAllGames(dataFiltered);
    }
  }, [genre, platform]);

  if (!allGames) {
    return <>Loading</>;
  }

  //PageNumbers
  const pageNumbers = allGames.length / gamesPerPage;

  //Get current games
  const indexOfLastGames = currentPage * gamesPerPage;
  const indexOfFirstPost = indexOfLastGames - gamesPerPage;
  const currentGames = allGames.slice(indexOfFirstPost, indexOfLastGames);

  //Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  //select platform
  const platformSelected = (platform: string) => setPlatform(platform);
  //select genre
  const genreSelected = (genre: string) => setGenre(genre);

  return (
    <Container sx={{ mt: 5 }}>
      <Box sx={{ mb: 5 }}>
        <PaginationComponent paginate={paginate} pageNumbers={pageNumbers} />
        <Platforms games={games} platformSelected={platformSelected} />
        <Categories games={games} genreSelected={genreSelected} />
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
