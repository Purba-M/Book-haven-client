import React from "react";
import banner from '../../assests/Banner.jpg'
import { NavLink } from "react-router";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFF7F3] via-[#FDF2E9] to-[#FFEEDD] rounded-xl px-5 py-4 transition-all duration-300 ease-in transform hover:-translate-y-3 hover:opacity-90">
      <h2 className="text-center font-bold text-4xl md:text-5xl">
        Welcome to <span className="bg-gradient-to-r from-[#D97706] to-[#6B4226] bg-clip-text text-transparent">

           Book Haven
        </span>
      </h2>
      <p className="text-[#5b4636] text-lg mt-2 text-center font-medium text-black">
        Step into a world of stories
      </p>

      <div className="flex md:flex-row flex-col md:gap-10 gap-5 mt-5">
        <div className="md:items-center text-center">
          <h2 className="text-[40px]  font-semibold mt-15 leading-relaxede text-[#382e26] animate-fade-up">
            Find your corner,sip your tea,and let the pages take you somewhere
            new.
          </h2>
          <div className="flex justify-center gap-5 mt-5">
            <NavLink
              to="/allbooks"
              className="btn px-5 bg-white text-cyan-500 font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[#00BFFF]/50 hover:scale-105"
            >
              All Books
            </NavLink>
            <NavLink
              to="/add-book"
              className="btn px-5 bg-white text-cyan-500 font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[#00BFFF]/50 hover:scale-105"
            >
              Create Books
            </NavLink>
          </div>
        </div>
        <img src={banner} className="md:w-1/2 rounded-lg shadow-lg"></img>
      </div>
    </div>
  );
};

export default Banner;
