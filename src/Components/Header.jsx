import React, { useContext } from "react";
import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { ThemeContext } from "../store/context";

function Header() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`p-4 px-4 sm:px-8 lg:px-16 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="text-lg font-bold">
          <a href="/" className="hover:text-gray-300">
            Where In the World?
          </a>
        </div>
        <button
          onClick={handleToggleTheme}
          className="flex items-center gap-2 justify-center mt-2 sm:mt-0"
        >
          {theme === "dark" ? <IoMdMoon /> : <FaSun />}
          <span className="hidden sm:inline">
            {theme === "light" ? "Light" : "Dark"} Mode
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
