import React from "react";
import { Link, useLoaderData } from "react-router";
import { FaRegClock, FaHeart } from "react-icons/fa";

const RecipeDetails = () => {
  const recipe = useLoaderData();

  const {
    title,
    image,
    ingredients,
    instructions,
    cuisineType,
    preparationTime,
    categories,
    likeCount,
  } = recipe;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-4">
        {title}
      </h2>
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full max-h-[400px] object-cover shadow-md mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
        {/* Ingredients */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            🧂 Ingredients
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {ingredients?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-rose-600 mb-2">
            📋 Instructions
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            {instructions?.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Extra Info */}
      <div className="mt-6 flex flex-wrap justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-md">
        <span className="flex items-center gap-2 text-gray-700 font-medium">
          🍽️ Cuisine: <span className="text-blue-600">{cuisineType}</span>
        </span>
        <span className="flex items-center gap-2 text-gray-700 font-medium">
          <FaRegClock className="text-rose-500" /> {preparationTime} mins
        </span>
        <span className="flex items-center gap-2 text-gray-700 font-medium">
          Categories:{" "}
          {categories?.map((cat, idx) => (
            <span
              key={idx}
              className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-sm ml-1"
            >
              {cat}
            </span>
          ))}
        </span>
        {likeCount !== undefined && (
          <span className="flex items-center gap-2 text-pink-600 font-semibold">
            <FaHeart className="text-red-500" /> {likeCount} Likes
          </span>
        )}
      </div>
      <div>
        <Link className="block text-center mt-6" to="/AllRecipes">
          <button className=" mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition duration-300">
            Back to Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
