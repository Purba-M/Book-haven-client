import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';

const Allbooks = () => {
    const[books,setBooks]=useState([])
    const navigate=useNavigate()

    //fecthing
    useEffect(()=>{
        fetch('http://localhost:5000/all-books')
        .then(res=>res.json())
        .then(data=>setBooks(data))
        .catch((e)=>{
            console.log('error fetching books',e)
        })
    },[])
    return (
        <div>
            <h2>All Books</h2>
           <div>
            <table>
                <thead>
            <tr className="bg-gray-100 text-gray-700">
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