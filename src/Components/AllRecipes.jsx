import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // Fetch recipes
  useEffect(() => {
    fetch("http://localhost:3000/recipes/AllRecipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setFilteredRecipes(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Update filtered recipes when cuisine changes
  useEffect(() => {
    if (selectedCuisine === 'All') {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter(
        (recipe) => recipe.cuisineType === selectedCuisine
      );
      setFilteredRecipes(filtered);
    }
  }, [selectedCuisine, recipes]);

  // Extract unique cuisine types
  const cuisineTypes = ['All', ...new Set(recipes.map((r) => r.cuisineType))];

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-6">All Recipes</h2>

      {/* Dropdown Filter */}
      <div className="mb-6 text-center">
        <label className="mr-2 font-semibold">Filter by Cuisine:</label>
        <select
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
          className="px-3 py-1 border rounded-md"
        >
          {cuisineTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe) => (
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

            <Link to={`/AllRecipes/${recipe._id}`}>
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
