import { useState } from "react";

// import Header from "../components/Header.jsx";
import Audacity from "../assets/audacity.svg";

function Home() {
  const [username, setUsername] = useState("my username");
  //   console.log(username);
  // console.log(import.meta.env.VITE_SOME_KEY);
  // console.log(import.meta.env.VITE_DB_PASSWORD);
  return (
    <main className="min-h-screen grid grid-rows-[1fr_1fr_auto]">
      {/* <Header title="Home" /> */}
      {/* Header({title="Home"}) */}
      {/* <h1>Home</h1> */}
      <section>
        <p>My Name is: {username}</p>
        <form
          // className="grow"
          onSubmit={(e) => {
            e.preventDefault();
            setUsername(e.target.username.value);
            e.target.username.value = "";
          }}
        >
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <button type="submit">Update Username</button>
        </form>
      </section>
      <section className="grid grid-cols-2 [&_img]:h-full [&_img]:w-full [&_img]:object-contain overflow-hidden">
        <img src="/audacity.svg" alt="audacity" />
        <img src={Audacity} alt="audacity" />
      </section>
      <footer className="p-5 bg-amber-200">
        <p>Ini Footer</p>
      </footer>
    </main>
  );
}

export default Home;
