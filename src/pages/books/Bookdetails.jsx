import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { Authcontext } from "../../provider/AuthProvider"

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(Authcontext);

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const loadComments = () => {
    axios
      .get(`https://book-haven-server-new.vercel.app/api/comments/${id}`)
      .then((res) => setComments(res.data));
  };

  useEffect(() => {
    axios
      .get(`https://book-haven-server-new.vercel.app/book-details/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      });

    loadComments();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newComment = {
      bookId: id,
      userName: user?.displayName || "Unknown User",
      userPhoto: user?.photoURL || "",
      comment: text,
      date: new Date().toISOString(),
    };

    await axios.post(
      "https://book-haven-server-new.vercel.app/api/add-comment",
      newComment
    );

    setText("");
    loadComments();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 rounded-lg shadow-md mt-10 bg-blue-100">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <img
            src={book.coverImage}
            className="w-full h-120 object-cover rounded-lg mb-6"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
          <p className="text-lg text-gray-600 mb-2 font-semibold ">
            Author: {book.author}
          </p>
          <p className="text-lg text-gray-600 mb-2">Genre: {book.genre}</p>
          <p className="text-lg text-gray-600 mb-2">Rating: {book.rating}⭐</p>
          <p className="text-orange-500 mt-4 font-semibold">{book.summary}</p>
          <button
            onClick={() => navigate("/allbooks")}
            className="btn bg-pink-300 mt-5"
          >
            Back to All Books
          </button>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Comments</h3>

        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="textarea textarea-bordered w-full mb-3"
            placeholder="Write a comment..."
          ></textarea>
          <button className="btn bg-blue-400 w-full" type="submit">
            Post Comment
          </button>
        </form>

        <div className="space-y-4">
          {comments.length === 0 && (
            <p className="text-gray-500">No comments yet.</p>
          )}

          {comments.map((c) => (
            <div key={c._id} className="p-3 bg-gray-100 rounded flex gap-3">
              <img
                src={c.userPhoto}
                className="w-10 h-10 rounded-full border"
              />
              <div>
                <p className="font-bold">{c.userName}</p>
                <p>{c.comment}</p>
                <p className="text-xs text-gray-500">
                  {new Date(c.date).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
