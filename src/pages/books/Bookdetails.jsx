import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const {id} = useParams();
  const [book,setBook] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/book-details/${id}`)
      .then((res) => {
        setTimeout(()=> {
          setBook(res.data);
           setLoading(false);
        },500);
      })
  },[id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="text-center py-10 text-red-500">Book not found.</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 ">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <img
            src={book.coverImage}
            className="w-full h-120 object-cover rounded-lg mb-6"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
          <p className="text-lg text-gray-600 mb-2">Author: {book.author}</p>
          <p className="text-lg text-gray-600 mb-2">Genre: {book.genre}</p>
          <p className="text-lg text-gray-600 mb-2">Rating: ⭐ {book.rating}</p>
          <p className="text-gray-700 mt-4">{book.summary}</p>
          <div className="mt-6 text-sm text-gray-500">
            Added by: {book.userEmail || "Unknown"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
