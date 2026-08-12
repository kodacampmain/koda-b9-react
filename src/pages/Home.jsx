import { useState } from "react";

import Header from "../components/Header.jsx";

function Home() {
  const [username, setUsername] = useState("my username");
  //   console.log(username);
  return (
    <main className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header title="Home" />
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
      <footer className="p-5 bg-amber-200">
        <p>Ini Footer</p>
      </footer>
    </main>
  );
}

export default Home;
