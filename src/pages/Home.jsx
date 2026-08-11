import { useState } from "react";

function Home() {
  const [username, setUsername] = useState("my username");
  console.log(username);
  return (
    <>
      <h1>Home</h1>
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
