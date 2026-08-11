import { useState } from "react";

import Header from "../components/Header.jsx";

function Home() {
  const [username, setUsername] = useState("my username");
  //   console.log(username);
  return (
    <>
      <Header title="Home" />
      {/* <h1>Home</h1> */}
      <p>My Name is: {username}</p>
      <form
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
    </>
  );
}

export default Home;
