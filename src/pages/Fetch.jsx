import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import fetchUrl from "../utils/fetchUrl.js";
// import Header from "../components/Header.jsx";
import Character from "../components/Character.jsx";

function Fetch() {
  const [data, setData] = useState([]);
  // const [status, setStatus] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();
  //   const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        // setIsLoading(true);
        let url = "https://rickandmortyapi.com/api/character";
        if (searchParam.size > 0) {
          url += `?${searchParam.toString()}`;
        }
        const data = await fetchUrl(url);
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
      //   finally {
      //     setIsLoading(false);
      //   }
    })();
  }, [searchParam]);
  return (
    <>
      {/* <Header title={"Rick"} /> */}
      <main className="p-5 grid gap-5">
        <h1 className="font-bold text-4xl">Rick and Morty</h1>
        <form
          className="grid grid-cols-4 gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const search = new URLSearchParams(searchParam);
            if (search.has("name")) {
              search.set("name", e.target.search.value);
            } else {
              search.append("name", e.target.search.value);
            }
            setSearchParam(search);
          }}
        >
          <input
            type="text"
            name="search"
            placeholder="search"
            className="border-2 border-black border-solid p-2 rounded-md col-span-3"
            defaultValue={searchParam.get("name") || ""}
          />
          <button
            type="submit"
            className="rounded-md bg-gray-300 hover:bg-gray-500 hover:text-white p-2 cursor-pointer"
          >
            search
          </button>
          <section className="col-span-4 grid grid-cols-3 gap-2">
            <div
              className={`my-border p-2 rounded-md cursor-pointer ${searchParam.get("status") === "alive" ? "bg-primary" : "bg-secondary"}`}
              onClick={() => {
                const sp = new URLSearchParams(searchParam);
                if (sp.has("status")) {
                  sp.set("status", "alive");
                } else {
                  sp.append("status", "alive");
                }
                setSearchParam(sp);
              }}
            >
              Alive
            </div>
            <div
              className={`my-border p-2 rounded-md cursor-pointer ${searchParam.get("status") === "dead" ? "bg-primary" : "bg-secondary"}`}
              onClick={() => {
                const sp = new URLSearchParams(searchParam);
                if (sp.has("status")) {
                  sp.set("status", "dead");
                } else {
                  sp.append("status", "dead");
                }
                setSearchParam(sp);
              }}
            >
              Dead
            </div>
            <div
              className={`my-border p-2 rounded-md cursor-pointer ${searchParam.get("status") === "unknown" ? "bg-primary" : "bg-secondary"}`}
              onClick={() => {
                const sp = new URLSearchParams(searchParam);
                if (sp.has("status")) {
                  sp.set("status", "unknown");
                } else {
                  sp.append("status", "unknown");
                }
                setSearchParam(sp);
              }}
            >
              Unknown
            </div>
          </section>
        </form>
        <section className="grid grid-cols-4 gap-2.5">
          {/* {isLoading && <p>Loading...</p>} */}
          {data.length <= 0 ? (
            <p>Loading...</p>
          ) : (
            data.map((char) => {
              return (
                <Character
                  key={char.id}
                  img={char.image}
                  name={char.name}
                  status={char.status}
                  id={char.id}
                />
              );
            })
          )}
        </section>
      </main>
    </>
  );
}

export default Fetch;
