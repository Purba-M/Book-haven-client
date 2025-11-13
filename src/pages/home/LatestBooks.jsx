import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';

const LatestBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading,setLoading]=useState([])

  useEffect(() => {
  axios.get('https://book-haven-server-new.vercel.app/latest-books')
    .then(res => {
      setTimeout(() => {
        setBooks(res.data);
        setLoading(false);
      },1000);
    })
}, []);

if (loading) {
  return <Spinner />;
}
return (
    <section className="max-w-7xl mx-auto my-10 bg-[#a3978f] rounded-xl">
      <h2 className="text-3xl font-bold text-center text-[#6B4226] mb-6">
       Our Latest Arrivals
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6  ">
        {books.map((book) =>(
          <div key={book._id} className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-slate-50/70 backdrop-blur-lg hover:shadow-black/50 hover:scale-103 ">
            <img
              src={book.coverImage} className="w-full h-90 object-cover rounded-lg mb-4"
            />
            <div className='px-5 mb-3'>
            <h3 className="text-xl font-bold text-black">{book.title}</h3>
            <p className="text-gray-600">By {book.author}</p>
            <p className="text-sm text-[#ad8a67] mt-2">{book.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBooks;
