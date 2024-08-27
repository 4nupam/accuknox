import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GiUbisoftSun, GiMoonBats } from "react-icons/gi";

const Nav = ({ input, handleSearch }) => {
  const [dark, setDark] = useState(false);

  const handleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="flex items-center justify-between p-2 w-full bg-blue-200 dark:bg-gray-800">
      {/* Left section */}
      <div className="flex items-center w-auto dark:text-white">
        <span className="font-semibold">Home</span>
        <span className="ml-1 flex items-center">
          <FaAngleRight />
          <span className="ml-1">Dashboard</span>
        </span>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4 w-auto dark:text-white">
        <span className="relative flex items-center gap-2 p-2 w-full max-w-xs border-b-2 border-gray-600">
          <CiSearch />
          <input
            type="text"
            placeholder="Search Here"
            className="bg-transparent outline-none flex-grow"
            value={input}
            onChange={handleSearch}
          />
        </span>
        <button
          onClick={handleDark}
          className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full text-blue-400 dark:text-yellow-300"
        >
          {dark ? <GiMoonBats /> : <GiUbisoftSun />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
