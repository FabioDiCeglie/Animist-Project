import { Fragment } from "react";
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

const games = ({ games }: any) => {
  if (!games) {
    return <>Loading</>;
  }

  const limitGames = games.slice(271);

  return (
    <Container>
      <PaginationComponent />
      <Grid container spacing={2}>
        {limitGames.map((game: data) => (
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
    </Container>
  );
};

export default games;
