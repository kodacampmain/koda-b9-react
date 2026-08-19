import { useEffect, useContext } from "react";
import { NavLink, useLocation, Navigate } from "react-router";

import themeContext from "../contexts/theme/themeContext.js";

/**
 * Header Component with Navigation
 * @returns {JSX.Element}
 */

const routes = [
  {
    title: "Home",
    to: "/home",
  },
  {
    title: "Welcome",
    to: "/welcome",
  },
  {
    title: "State-Lifting",
    to: "/state",
  },
  {
    title: "Data-Fetching",
    to: "/rick",
  },
];

function Header() {
  // const navigate = useNavigate();
  const themeData = useContext(themeContext);
  const { pathname } = useLocation();
  const getTitle = () => {
    if (pathname === "/") return;
    const route = routes.filter((route) => pathname.includes(route.to));
    if (route.length === 0) return "Page";
    return route[0].title;
  };
  useEffect(() => {
    // if (pathname === "/") {
    //   return navigate("/home", { replace: true });
    // }
    if (pathname !== "/") {
      const route = routes.filter((route) => pathname.includes(route.to));
      document.title = `Koda B9 React | ${route[0]?.title || "Page"}`;
    }
  }, [pathname]);
  // console.log(pathname);
  //   const title = props.title;
  if (pathname === "/") {
    return <Navigate to={"/home"} replace />;
  }
  return (
    <header
      className={`flex justify-between p-1 ${themeData.theme === "light" ? "bg-blue-200 text-black" : "bg-blue-800 text-white"}`}
    >
      <h1 className="flex justify-center items-center">{getTitle()}</h1>
      <nav className="flex justify-center items-center">
        <ul className="list-none flex gap-1.5">
          {routes.map((route, idx) => {
            return (
              <li key={idx}>
                <NavLink
                  to={route.to}
                  className={({ isActive }) => {
                    return isActive ? "bg-primary" : "";
                  }}
                >
                  {route.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
