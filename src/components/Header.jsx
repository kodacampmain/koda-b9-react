import { Link, useNavigate } from "react-router";

function Header({ title }) {
  const navigate = useNavigate();
  //   const title = props.title;
  return (
    <header className="flex justify-between p-1 bg-blue-300">
      <h1 className="flex justify-center items-center">{title}</h1>
      <nav className="flex justify-center items-center">
        <ul className="list-none flex gap-1.5">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/welcome"}>Welcome</Link>
          </li>
          <li
            onClick={() => {
              console.log("state");
              navigate("/state");
            }}
          >
            State-Lifting
          </li>
          <li
            onClick={() => {
              console.log("rick");
              navigate("/rick");
            }}
          >
            Data-Fetching
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
