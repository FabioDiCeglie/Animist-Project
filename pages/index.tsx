import Image from "next/image";
interface data {
  id: number;
  attributes: {
    titles: {
      en: string;
    };
    coverImage: {
      original: string;
    };
  };
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://kitsu.io/api/edge/trending/manga`);

  const data = await res.json();

  // Pass data to the page via props
  return { props: { mangas: data } };
}

const Home = ({ mangas }: any) => {
  console.log(mangas);
  if (!mangas) {
    return <>Loading</>;
  }
  return (
    <div>
      <h1>Trending Manga</h1>
      {mangas.data.map((manga: data) => (
        <div key={manga.id}>
          <h1>{manga.attributes.titles.en}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
