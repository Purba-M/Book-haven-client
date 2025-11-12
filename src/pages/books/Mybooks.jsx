import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Mybooks = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/all-books")
      .then((res) => {
        setTimeout(() => {
          setBooks(res.data);
          setLoading(false);
        }, 1000);
      })
  }, []);

  if(loading)
    return(
<div className="flex justify-center items-center min-h-screen">
<span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>
<span className="loading loading-ball loading-xl"></span>
</div>
)

  return (
    <div>
      <h>My Book List</h>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {books.map((book) => (
          <div key={book._id} className="card card-side bg-base-100 shadow-sm border">
            <figure>
              <img src={book.coverImage} className="w-32 h-50 object-cover"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>
              <p className="text-gray-600">{book.author}</p>
              <p className="text-sm">{book.genre}</p>
             
              <div className="card-actions justify-end">
                <button 
                  onClick={() => navigate(`/book/${book._id}`)} 
                  className="btn btn-sm btn-primary"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        
        ))}
          
       </div>
      </div>
    
  );
};

export default Mybooks;
