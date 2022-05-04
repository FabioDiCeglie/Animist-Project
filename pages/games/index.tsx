/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import PaginationComponent from "../../components/Pagination";

interface data {
  id: number;
  title: string;
  thumbnail: string;
}

export async function getServerSideProps() {
  const res = await fetch(`https://www.freetogame.com/api/games?platform=pc`);
  const data = await res.json();

  return { props: { games: data } };
}

const Games = ({ games }: any) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [gamesPerPage, setGames] = useState<number>(30);

  if (!games) {
    return <>Loading</>;
  }

  //PageNumbers
  const pageNumbers = games.length / gamesPerPage;

  //Get current games
  const indexOfLastGames = currentPage * gamesPerPage;
  const indexOfFirstPost = indexOfLastGames - gamesPerPage;
  const currentGames = games.slice(indexOfFirstPost, indexOfLastGames);
  console.log(currentGames);

  //Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Grid container spacing={2}>
        {currentGames.map((game: data) => (
          <Fragment key={game.id}>
            <Grid item xs={8} lg={4}>
              <Typography variant="subtitle1">{game.title}</Typography>

              <img
                src={game.thumbnail}
                alt={game.title}
                width={300}
                height={300}
              />
            </Grid>
          </Fragment>
        ))}
      </Grid>
      <PaginationComponent paginate={paginate} pageNumbers={pageNumbers} />
    </Container>
  );
};

export default Games;
