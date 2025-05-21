import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recipes/AllRecipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-6">All Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between"
          >
            <img
              src={recipe.image || "https://via.placeholder.com/300"}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">{recipe.title}</h3>
            <p className="text-gray-600">Cuisine: {recipe.cuisineType}</p>
            <p className="text-gray-600">Likes: {recipe.likeCount}</p>

            <Link to={`/recipe/${recipe._id}`}>
              <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded">
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
