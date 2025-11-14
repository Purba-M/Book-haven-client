import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#7b6d59] text-gray-300 px-10 py-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        <div>
          <h2 className="font-bold text-3xl text-black mb-2">Book Haven</h2>
          <p>Read. Review. Repeat.</p>
        </div>

        {/* Explore */}
        <div>
          <h6 className="text-black font-semibold mb-3">EXPLORE</h6>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">All Books</li>
            <li className="hover:text-white cursor-pointer">Add a Book</li>
            <li className="hover:text-white cursor-pointer">My Collection</li>
            <li className="hover:text-white cursor-pointer">Top Rated</li>
          </ul>
        </div>

        {/* Book Haven */}
        <div>
          <h6 className="text-black font-semibold mb-3">BOOK HAVEN</h6>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-black font-semibold mb-3">LEGAL</h6>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h6 className="text-black font-semibold mb-3">FOLLOW US</h6>
          <div className="flex space-x-4">
            <FaFacebook className="text-xl hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="text-xl hover:text-sky-500 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-pink-500 cursor-pointer" />
            <FaGithub className="text-xl hover:text-white cursor-pointer" />
          </div>
        </div>

      </div>

      
      <div className="text-center mt-10 text-sm">
        Copyright © {new Date().getFullYear()} — All rights reserved by Book Haven
      </div>
    </footer>
  );
};

export default Footer;
