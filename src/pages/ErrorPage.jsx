
import React from "react";
import page from '../assets/error.png'

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <img src={page} className="h-[50vh] w-auto object-contain"></img>
     
    </div>
  );
};

export default ErrorPage;