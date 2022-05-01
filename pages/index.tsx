import Image from "next/image";
interface data {
  id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.jikan.moe/v4/manga`);

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
          <h1>{manga.title}</h1>
          <img
            src={manga.images.jpg.image_url}
            alt={manga.title}
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
