import React, { use, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";

const AddRecipe = () => {
  const { user } = use(AuthContext);  
  const [likeCount, setLikeCount] = useState(0);

  const handleAddRecipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newRecipe = Object.fromEntries(formData.entries());

    newRecipe.categories = formData.getAll("categories");
    newRecipe.likeCount = likeCount;

    
    newRecipe.ownerId = user?.uid;

    fetch("https://recipe-book-server-sooty.vercel.app/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "🎉 Recipe added successfully!",
            icon: "success",
            confirmButtonColor: "#3085d6",
          });
          form.reset();
        }
      });
  };


  return (
    <div className="max-w-4xl mx-auto px-6 py-10 mt-12 bg-gradient-to-br from-orange-100 to-yellow-50 shadow-xl rounded-3xl">
      <h2 className="text-3xl font-bold text-center text-orange-700 mb-4">
        🍽️ Add a New Recipe
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Share your favorite recipe and inspire food lovers around the world!
      </p>

      <form onSubmit={handleAddRecipe} className="space-y-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recipe Image */}
          <div>
            <label className="block font-semibold mb-1 text-gray-800">Recipe Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="e.g. https://example.com/recipe.jpg"
              className="w-full border border-orange-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Title */}
          <div>
            <label className="block font-semibold mb-1 text-gray-800">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Chicken Alfredo"
              className="w-full border border-orange-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Ingredients */}
          <div className="lg:col-span-2">
            <label className="block font-semibold mb-1 text-gray-800">Ingredients</label>
            <textarea
              name="ingredients"
              rows="3"
              placeholder="List ingredients, separated by commas"
              className="w-full border border-orange-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <label className="block font-semibold mb-1 text-gray-800">Instructions</label>
            <textarea
              name="instructions"
              rows="4"
              placeholder="Describe the preparation steps..."
              className="w-full border border-orange-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
          </div>

          {/* Cuisine Type */}
          <div>
            <label className="block font-semibold mb-1 text-gray-800">Cuisine Type</label>
            <select
              name="cuisineType"
              className="w-full border border-orange-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select Cuisine</option>
              <option>Italian</option>
              <option>Mexican</option>
              <option>Indian</option>
              <option>Chinese</option>
              <option>Others</option>
            </select>
          </div>

          {/* Preparation Time */}
          <div>
            <label className="block font-semibold mb-1 text-gray-800">
              Preparation Time (mins)
            </label>
            <input
              type="number"
              name="preparationTime"
              min="1"
              className="w-full border border-orange-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <label className="block font-semibold mb-1 text-gray-800">Categories</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((category) => (
                <label key={category} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    value={category}
                    name="categories"
                    className="accent-orange-500"
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Like Count Preview */}
        <div className="text-center text-orange-600 font-semibold">
          ❤️ Like Count: {likeCount}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition duration-200"
        >
          ➕ Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
