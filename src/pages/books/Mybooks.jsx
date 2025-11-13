import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Authcontext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Mybooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(Authcontext) // get logged in user from context

useEffect(() => {
  if (!user?.email) return;
   axios.get(`http://localhost:5000/my-books?email=${user.email}`)
    .then((res) => {
      setBooks(res.data);
      setLoading(false);
    },600)
    .catch((err) => console.error("Error fetching user books:", err));
}, [user]);



  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );

   const handleDelete = (id) => {
    // Regular confirm() for confirmation
    if (confirm("Are you sure you want to delete this book?")) {
      axios
        .delete(`http://localhost:5000/delete-book/${id}`)
        .then(() => {
          setBooks(books.filter((book) => book._id !== id));
          toast.success("Book deleted successfully!");
        })
        .catch(() => {
          toast.error("Failed to delete the book.");
        });
    }
  };


  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">My Books</h2>

      {books.length === 0 ? (
        <p className="text-gray-500">You haven’t added any books yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Cover</th>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book._id}>
                  <td>
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-16 h-20 object-cover rounded"
                    />
                  </td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/update-book/${book._id}`)}
                      className="btn btn-sm btn-info mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Mybooks;
