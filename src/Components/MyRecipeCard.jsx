import React, { useState } from "react";

const MyRecipeCard = ({ recipe }) => {
  const [likeCount, setLikeCount] = useState(recipe.likeCount || 0);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md grid md:grid-cols-2 gap-6 my-5">
      {/* Recipe Image */}
      <div className="w-full ">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>

      {/* Recipe Details */}
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Cuisine:</span> {recipe.cuisine}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Preparation Time:</span>{" "}
            {recipe.time} mins
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Category:{recipe.cuisine}</span>{" "}
             
          </p>
          <p className="text-sm text-gray-600 mt-3">
            <span className="font-semibold">Ingredients:</span>{" "}
            {recipe.ingredients}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-semibold">Instructions:</span>{" "}
            {recipe.instructions}
          </p>
        </div>

        {/* Like + Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 items-center">
          <span className="text-gray-700 text-sm">❤️ Likes: {likeCount}</span>
          <div className="flex gap-3 ml-auto">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl text-sm">
              Update
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRecipeCard;
