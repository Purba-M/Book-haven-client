import React, { useState, useEffect } from "react";
import banner from "../../assests/Banner.jpg";
import { NavLink } from "react-router-dom"; 

const Banner = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light");

  useEffect(()=>{
    if (theme==="dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme",theme);
  }, [theme]);

  const toggleTheme =()=>{
    setTheme(theme ==="dark"?"light":"dark");
  };

  return (
    <div
      className={`${
        theme==="dark"
          ?"bg-gradient-to-r from-gray-500 via-gray-800 to-gray-600 text-white"
          :"bg-gradient-to-r from-[#FFF7F3] via-[#FDF2E9] to-[#FFEEDD] "} rounded-xxl px-5 py-4 transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:opacity-90`}>
     
      <div className="flex justify-end mb-3">
        <button onClick={toggleTheme}
          className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:scale-110 transition"
          aria-label="Toggle theme">
          {theme==="dark"?"🌞":"🌙"}
        </button>
      </div>

      <h2 className="text-center font-bold text-4xl md:text-5xl">
        Welcome to <span className="bg-gradient-to-r from-[#D97706] to-[#6B4226] bg-clip-text text-transparent">
          Book Haven</span>
      </h2>
      <p className="text-lg mt-2 text-center font-medium">
        Step into a world of stories
      </p>
      <div className="flex md:flex-row flex-col md:gap-10 gap-5 mt-5">
        <div className="md:items-center text-center">
          <h2 className="text-[40px] font-semibold mt-15 leading-relaxed animate-fade-up">
            So many books, so little time.
          </h2>
          <p className="text-gray-800 dark:text-gray-300 font-semibold">
            Dive into your next story at Book{" "}
            <span className="text-orange-400">Haven.</span>
          </p>

          <div className="flex justify-center gap-5 mt-5">
            <NavLink
              to="/allbooks"
              className="btn px-5 bg-white text-cyan-500 font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[#00BFFF]/50 hover:scale-105 "
            >
              All Books
            </NavLink>
            <NavLink
              to="/add-book"
              className="btn px-5 bg-white text-cyan-500 font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[#00BFFF]/50 hover:scale-105 ">
              Create Books
            </NavLink>
          </div>
        </div>

        <img src={banner} alt="banner" className="md:w-1/2 rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Banner;
