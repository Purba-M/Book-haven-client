import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { format } from "date-fns";

const Allbooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetching books
  useEffect(() => {
    axios
      .get("https://book-haven-server-new.vercel.app/all-books")
      .then((res) => {
        setTimeout(() => {
          setBooks(res.data);
          setLoading(false);
        }, 1000);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSort = (type) => {
    const sortedBooks = [...books];
    if (type === "high") {
      sortedBooks.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    if (type === "low") {
      sortedBooks.sort((a, b) => (a.rating || 0) - (b.rating || 0));
    }
    setBooks(sortedBooks);
  };

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
    <div className="p-8 bg-gray-400 rounded-3xl">
      <h2 className="font-bold text-center text-3xl">All Books</h2>

      <div className="flex justify-end mb-4">
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="select select-bordered max-w-xs"
        >
          <option value="">Sort by Rating</option>
          <option value="high">High→Low</option>
          <option value="low">Low→High</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-2xl">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr className="bg-green-200 text-gray-700">
              <th className="py-2 px-4 border-b text-left">#</th>
              <th className="py-2 px-4 border-b text-left">Book Name</th>
              <th className="py-2 px-4 border-b text-left">Author</th>
              <th className="py-2 px-4 border-b text-left">Genre</th>
              <th className="py-2 px-4 border-b text-left">Rating</th>
              <th className="py-2 px-4 border-b text-left">Added On</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b font-bold">{book.title}</td>
                <td className="py-2 px-4 border-b font-semibold text-gray-500">
                  {book.author}
                </td>
                <td className="py-2 px-4 border-b font-semibold text-gray-400">
                  {book.genre}
                </td>
                <td className="py-2 px-4 border-b">{book.rating || "N/A"}</td>
                <td className="py-2 px-4 border-b">
                  {book.createdAt
                    ? format(new Date(book.createdAt), "dd MMM yyyy")
                    : "N/A"}
                </td>

                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => navigate(`/book-details/${book._id}`)}
                    className="hover:bg-emerald-200 bg-blue-400 text-white px-3 py-1 rounded cursor-pointer"
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
