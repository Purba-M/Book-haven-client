import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../provider/AuthProvider"; 
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext); 

  const handleLogout = () => {
    logout()
      .then(() => toast.success("Logged out successfully!"))
      .catch(() => toast.error("Logout failed!"));
  };

  const links = (
    <>
      <li><NavLink to="/" className='font-semibold'>🏠 Home</NavLink></li>
      <li><NavLink to="/allbooks" className='font-semibold'>📚 All Books</NavLink></li>
      <li><NavLink to="/add-book" className='font-semibold'>📝 Add Book</NavLink></li>
      <li><NavLink to="/my-books" className='font-semibold'>📖 My Books</NavLink></li>
    </>
  );

  return (
    <div className="navbar  shadow-sm bg-[#da9dac]">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className=" text-xl font-bold text-red-600 hover:text-blue-700 cursor-pointer transform hover:-translate-x-1">
          Book <span className="text-black">Haven</span>
        </a>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right */}
      <div className="navbar-end space-x-3">
        {!user ? (
          
          <>
            <NavLink to="/auth/login" className="btn btn-outline btn-sm bg-indigo-300">
              Login
            </NavLink>
            <NavLink to="/auth/register" className="btn btn-error btn-sm text-white bg-orange-500">
              Register
            </NavLink>
          </>
        ) : (
          
          <div className="flex items-center gap-3">
            {user.photoURL ? (
              <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-red-400"
                />
              </div>
            ) : (
              <span className="font-semibold">{user.displayName || "User"}</span>)}

            <button onClick={handleLogout} className="btn btn-sm bg-fuchsia-200 font-semibold shadow-xl  transform hover:-translate-x-1">
              Log Out ➜]
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
