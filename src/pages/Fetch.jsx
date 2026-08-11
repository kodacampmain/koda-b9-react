import { useEffect, useState } from "react";
import fetchUrl from "../utils/fetchUrl.js";
import Header from "../components/Header.jsx";

function Fetch() {
  const [data, setData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        // setIsLoading(true);
        const url = "https://rickandmortyapi.com/api/character";
        const data = await fetchUrl(url);
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
      //   finally {
      //     setIsLoading(false);
      //   }
    })();
  }, []);
  return (
    <>
      <Header title={"Rick"} />
      <main className="p-5 grid gap-5">
        <h1 className="font-bold text-4xl">Rick and Morty</h1>
        <form className="flex gap-2">
          <input
            type="text"
            name="search"
            placeholder="search"
            className="border-2 border-black border-solid p-2 rounded-md"
          />
          <button
            type="submit"
            className="rounded-md bg-gray-300 hover:bg-gray-500 hover:text-white p-2 cursor-pointer"
          >
            search
          </button>
        </form>
        <section className="grid grid-cols-4 gap-2.5">
          {/* {isLoading && <p>Loading...</p>} */}
          {data.length <= 0 ? (
            <p>Loading...</p>
          ) : (
            data.map((char) => {
              return (
                <article key={char.id}>
                  <img src={char.image} alt={char.name} />
                  <p className="font-bold">{char.name}</p>
                  <p>{char.status}</p>
                </article>
              );
            })
          )}
        </section>
      </main>
    </>
  );
}

export default Fetch;
