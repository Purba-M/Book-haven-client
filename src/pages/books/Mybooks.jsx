import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Authcontext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Mybooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(Authcontext);

  useEffect(() => {
    if (!user?.email) return;
    axios
      .get(
        `https://book-haven-server-new.vercel.app/my-books?email=${user.email}`
      )
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      }, 600)
      .catch((err) => console.error("Error fetching user books:", err));
  }, [user]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );

  const handleDelete=(id)=> {
    toast(
      (t) => (
        <div className="p-2">
          <p className="font-semibold">Are you sure you want to delete?</p>
          <div className="flex gap-3 mt-2">
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={()=> {
                axios.delete(`https://book-haven-server-new.vercel.app/delete-book/${id}`)
                  .then(()=>{
                    setBooks((prev)=>prev.filter((b)=>b._id!== id));
                    toast.success("Book deleted!");
                  })
                  .catch(()=> toast.error("Failed to delete"));
                toast.dismiss(t.id);
              }}>
              Yes
            </button>
            <button
              className="px-3 py-1 bg-gray-300 rounded"
              onClick={()=>toast.dismiss(t.id)}>
              No
            </button>
          </div>
        </div>
      ),1000); };

  return (
    <div className="p-6 bg-gray-200 rounded-2xl">
      <h2 className="text-3xl font-bold mb-4 text-center">My Books</h2>
      {books.length===0?(<p className="text-gray-500 text-center">You haven’t added any books yet.</p>
      ):(
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
                    <div className="flex flex-col md:flex-row gap-2">
                      <button onClick={() => navigate(`/update-book/${book._id}`)} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(book._id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        Delete
                      </button>
                    </div>
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
