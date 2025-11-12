import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';

const LatestBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading,setLoading]=useState([])

  useEffect(() => {
  axios('http://localhost:5000/latest-books')
    .then(res => {
      setTimeout(() => {
        setBooks(res.data);
        setLoading(false);
      }, 1000); // optional small delay
    })
    .catch(err => {
      console.error("Error fetching books:", err);
      setLoading(false);
    });
}, []); // dependency array closes here

if (loading) {
  return <Spinner />; // show spinner while fetching
}


  return (
    <section className="max-w-7xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center text-[#6B4226] mb-6">
    Our Latest Arrivals
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {books.map((book) => (
          <div key={book._id} className="bg-[#FFF9F4] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5">
            <img
              src={book.coverImage} 
              alt={book.title}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-[#4B2E05]">{book.title}</h3>
            <p className="text-gray-600">By {book.author}</p>
            <p className="text-sm text-[#A67C52] mt-2">{book.genre}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBooks;
