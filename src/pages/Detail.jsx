import { useEffect, useState } from "react";
import { useParams } from "react-router";

import fetchUrl from "../utils/fetchUrl.js";

function Detail() {
  const { id, slug } = useParams();
  console.log("slug:", slug);
  const [char, setChar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        const data = await fetchUrl(url);
        setChar(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {char && (
        <>
          <main className="flex flex-col items-center">
            <h1>{char.name}</h1>
            <div>
              <img src={char.image} alt={char.name} />
            </div>
            <p>Featured episodes: {char.episode.length}</p>
            <p>Status: {char.status}</p>
            <p>Species: {char.species}</p>
            <p>Gender: {char.gender}</p>
          </main>
        </>
      )}
    </>
  );
}

export default Detail;
