import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Update = () => {
  const { id } = useParams(); // get book id from URL
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    axios.get(`https://book-haven-server-new.vercel.app/book-details/${id}`)

      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load book details");
      });
  }, [id]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://book-haven-server-new.vercel.app/update-book/${id}`, book)
      .then(() => {
        toast.success("Book updated successfully!");
        navigate("/my-books");
      })
      .catch(() => toast.error("Update failed. Try again."));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-base-200 rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Book</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            value={book.title || ""}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Author</label>
          <input
            type="text"
            name="author"
            value={book.author || ""}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Genre</label>
          <input
            type="text"
            name="genre"
            value={book.genre || ""}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Cover Image URL</label>
          <input
            type="text"
            name="coverImage"
            value={book.coverImage || ""}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default Update;
