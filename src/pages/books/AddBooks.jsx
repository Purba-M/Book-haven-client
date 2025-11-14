import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddBooks = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    summary: "",
    coverImage: "",
    userEmail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "https://book-haven-server-new.vercel.app/add-book",
      formData,
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.status === 200 || response.status === 201) {
      toast.success("Book added successfully!");
      setFormData({
        title: "",
        author: "",
        genre: "",
        rating: "",
        summary: "",
        coverImage: "",
        userEmail: "",
      });
    } else {
      toast.error("Failed to add book.");
    }
  } catch (error) {
    console.error("Error adding book:", error.response?.data||error.message);
    toast.error("Server error. Check your backend logs.");
  }
};

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-amber-100 via-rose-50 to-emerald-100  rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Add a New Book
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="rating"
          placeholder="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
         <textarea
          type="text"
          name="summary"
          placeholder="summary"
          value={formData.summary}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows='3'
        />

        <input
          type="text"
          name="coverImage"
          placeholder="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />


        <input
          type="text"
          name="userEmail"
          placeholder="email"
          value={formData.userEmail}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-cyan-700 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
