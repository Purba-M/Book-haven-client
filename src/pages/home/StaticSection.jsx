import React from "react";
import image from "../../assests/image.png";
import name from "../../assests/your_name.jpg";
import maze from "../../assests/maze-ruuner.jpg";
import finn from "../../assests/finn.jpg";
import murder from "../../assests/featured.jpg";
import peace from "../../assests/peace.jpg";
import alchemist from "../../assests/alchemist.jpg";

const StaticSection = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 bg-[#FFEEDD] rounded-2xl">
     
      <h2 className="font-bold text-4xl text-center mb-6">Here is our Top Genres</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {[
          { img: image, genre: "Fantasy" },
          { img: name, genre: "Novel" },
          { img: maze, genre: "Action" },
          { img: finn, genre: "Adventure" },
        ].map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 w-full max-w-xs shadow-sm hover:shadow-md transition-shadow">
            <figure>
              <img
                src={item.img}
                className="w-full h-64 object-cover rounded-t-xl"
                alt={item.genre}
              />
            </figure>
            <div className="card-body text-center bg-blend-overlay">
              <h2 className="card-title text-lg">Genre: {item.genre}</h2>
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-16">
        <h2 className="font-bold text-4xl mb-10 text-center">
          Book Recommended by our Readers this Week ➜</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {[
            {
              img: murder,
              desc:"The Murder in the Bookshop is a classic mystery where a rare book theft leads to a chilling murder. Detective Fleming Stone must uncover the truth hidden among dusty shelves and dark secrets.",
            },
            {
              img: peace,
              desc:"War and Peace by Leo Tolstoy is an epic novel exploring the lives of Russian families during the Napoleonic Wars, weaving themes of love, fate, and meaning amid chaos.",
            },
            {
              img: alchemist,
              desc:"The Alchemist by Paulo Coelho tells the story of Santiago, a shepherd who follows his dream in search of treasure, discovering destiny and self-discovery along the way.",
            },
          ].map((book, index) => (
            <div
              key={index}
              className="card bg-base-100 w-full max-w-xs shadow-sm hover:shadow-md transition-shadow h-[460px] flex flex-col mb-5">
              <figure>
                <img
                  src={book.img}
                  className="w-full h-72 object-cover rounded-t-xl"/>
              </figure>
              <div className="card-body flex-1">
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 font-semibold">
                  {book.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticSection;
