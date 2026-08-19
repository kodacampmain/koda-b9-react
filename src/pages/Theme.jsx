import { useContext } from "react";

import themeContext from "../contexts/theme/themeContext.js";

function Theme() {
  return (
    <main className="px-5 py-2 min-h-screen">
      <h2>Using Context Theme</h2>
      <section className="grid grid-cols-3 *:h-40 [&>*>*]:h-full [&>*>*]:my-border-amber-300 [&>*>*]:p-3">
        <section>
          <A />
        </section>
        <section>
          <B />
        </section>
        <section>
          <C />
        </section>
      </section>
    </main>
  );
}

function A() {
  const themeData = useContext(themeContext);
  return (
    <div
      className={`${themeData.theme === "light" ? "bg-blue-200 text-black" : "bg-blue-800 text-white"}`}
    >
      <p>A</p>
      <button
        onClick={() => {
          themeData.toggleTheme();
        }}
        className={`my-border cursor-pointer p-1 rounded-md ${themeData.theme === "light" ? "bg-gray-300 hover:bg-gray-400" : "bg-gray-900 hover:bg-gray-800"}`}
      >
        Toggle Theme
      </button>
    </div>
  );
}

function B() {
  const themeData = useContext(themeContext);
  return (
    <div
      className={`${themeData.theme === "light" ? "bg-blue-200 text-black" : "bg-blue-800 text-white"}`}
    >
      <p>B</p>
    </div>
  );
}

function C() {
  const themeData = useContext(themeContext);

  return (
    <div
      className={`${themeData.theme === "light" ? "bg-blue-200 text-black" : "bg-blue-800 text-white"}`}
    >
      <p>C</p>
    </div>
  );
}

export default Theme;
