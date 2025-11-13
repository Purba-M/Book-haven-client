import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import Spinner from "../../components/Spinner";

const Allbooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //fecthing
  useEffect(() => {
    axios.get("https://book-haven-server-new.vercel.app/all-books")
      .then((res) => {
        setTimeout(() => {
          setBooks(res.data);
          setLoading(false);
        }, 1000);
      })
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen"> 
        <span className="loading loading-infinity loading-xs"></span>
        <span className="loading loading-infinity loading-sm"></span>
        <span className="loading loading-infinity loading-md"></span>
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    ); 
  }

  return (
    <div className="p-8">
      <h2 className="font-bold text-center text-3xl">All Books</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr className="bg-green-200 text-gray-700">
              <th className="py-2 px-4 border-b text-left">#</th>
              <th className="py-2 px-4 border-b text-left">Book Name</th>
              <th className="py-2 px-4 border-b text-left">Author</th>
              <th className="py-2 px-4 border-b text-left">Genre</th>
              <th className="py-2 px-4 border-b text-left">Rating</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{book.title}</td>
                <td className="py-2 px-4 border-b">{book.author}</td>
                <td className="py-2 px-4 border-b">{book.genre}</td>
                <td className="py-2 px-4 border-b">{book.rating || "N/A"}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => navigate(`/book-details/${book._id}`)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allbooks;
