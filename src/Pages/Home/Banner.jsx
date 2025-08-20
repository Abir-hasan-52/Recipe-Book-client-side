// src/components/Banner.jsx
import React from "react";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/AllRecipes");
  };

  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center rounded-2xl shadow-md"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/C38gnt3s/search-hero-2.jpg')`, // tumi ekhane Canva or any image path dibo
      }}
    >
      {/* Overlay for darken effect */}
      <div className="absolute inset-0  "></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl p-6 text-left text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
         You don't know how to make the dish you have in mind?
        </h1>
        <p className="mb-6 text-lg sm:text-xl">
          Feed your imagination and spark your creativity. From cravings to creations, let your ideas flourish and uncover the perfect recipe waiting to be discovered.
        </p>
        <button
          onClick={handleClick}
          className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Explore All Recipes
        </button>
      </div>
    </section>
  );
};

export default Banner;
