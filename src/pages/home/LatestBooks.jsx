import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';

const LatestBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState([]);
  
  // Local theme state
  const [theme, setTheme] = useState("light");

  // Toggle handler
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    axios.get('https://book-haven-server-new.vercel.app/latest-books')
      .then(res => {
        setTimeout(() => {
          setBooks(res.data);
          setLoading(false);
        }, 1000);
      })
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section
      className={`max-w-7xl mx-auto my-10 rounded-xl transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-[#a3978f] text-black"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end mb-3 p-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:scale-110 transition"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

      <h2
        className={`text-3xl font-bold text-center mb-6 ${
          theme === "dark" ? "text-[#F9E4C8]" : "text-[#6B4226]"
        }`}
      >
        Our Latest Arrivals
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6">
        {books.map((book) => (
          <div
            key={book._id}
            className={`rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-lg hover:scale-103 ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-slate-50/70"
            }`}
          >
            <img
              src={book.coverImage}
              className="w-full h-90 object-cover rounded-lg mb-4"
            />
            <div className="px-5 mb-3">
              <h3 className="text-xl font-bold">
                {book.title}
              </h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                By {book.author}
              </p>
              <p
                className={`text-sm mt-2 ${
                  theme === "dark" ? "text-[#E1B382]" : "text-[#ad8a67]"
                }`}
              >
                {book.genre}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBooks;