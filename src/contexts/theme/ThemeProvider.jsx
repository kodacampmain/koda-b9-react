import { useState } from "react";

import ThemeContext from "./themeContext.js";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((currentTheme) => {
      if (currentTheme === "light") return "dark";
      return "light";
    });
  };
  return (
    <ThemeContext.Provider
      value={{
        theme, // theme: theme
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

{/* <ThemeProvider>
  <h1></h1>
  <p></p>
  <section>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </section>
</ThemeProvider>; */}
