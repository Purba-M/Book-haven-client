import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-[#7b6d59] text-gray-300 
 p-10 flex-1">
  <aside>
    <p>
      <span className='font-bold text-3xl text-black mb-3'>Book Haven</span>
      <br />
      Read. Review. Repeat.
    </p>
  </aside>
    <nav>
        <h6 className="footer-title text-black">Explore</h6>
        <a className="link link-hover">All Books</a>
        <a className="link link-hover">Add a Book</a>
        <a className="link link-hover">My Collection</a>
        <a className="link link-hover">Top Rated</a>
      </nav>
 <nav>
        <h6 className="footer-title text-black">Book Haven</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">FAQ</a>
        <a className="link link-hover">Support</a>
      </nav>
   <nav>
        <h6 className="footer-title text-black">Legal</h6>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Cookie Policy</a>
      </nav>

      <nav>
        <h6 className="footer-title text-black">Follow Us</h6>
        <div className="flex space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-xl hover:text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="text-xl hover:text-sky-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-xl hover:text-pink-500" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="text-xl hover:text-gray-700" />
          </a>
        </div>
      </nav>
</footer>
    );
};

export default Footer;