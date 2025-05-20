import React, { useState } from "react";
import Swal from "sweetalert2";

const AddRecipe = () => {
  const [likeCount, setLikeCount] = useState(0);

  const handleAddRecipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newRecipe = Object.fromEntries(formData.entries());
    console.log(newRecipe);
    // send recipe data to the db
    fetch("http://localhost:3000/recipes", {
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
            title: "Recipe Add successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset()
        }
      });
  };

  return (
    <div className="w-8/12 mx-auto p-6 bg-amber-100  rounded-2xl shadow-md mt-12 ">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>
      <p className="text-gray-600 text-sm mb-4 text-center">
        Share your favorite recipe with the world! Fill in the details below and
        inspire others to cook something delicious.
      </p>

      <form onSubmit={handleAddRecipe} className="space-y-4">
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Image URL */}
          <div>
            <label className="block font-medium mb-1">Recipe Image</label>
            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter recipe title"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Ingredients */}
          <div className="lg:col-span-2">
            <label className="block font-medium mb-1">Ingredients</label>
            <textarea
              name="ingredients"
              placeholder="List ingredients"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <label className="block font-medium mb-1">Instructions</label>
            <textarea
              name="instructions"
              placeholder="Describe preparation steps"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Cuisine Type */}
          <div>
            <label className="block font-medium mb-1">Cuisine Type</label>
            <select name="cuisine" className="w-full border p-2 rounded">
              <option>Italian</option>
              <option>Mexican</option>
              <option>Indian</option>
              <option>Chinese</option>
              <option>Others</option>
            </select>
          </div>

          {/* Preparation Time */}
          <div>
            <label className="block font-medium mb-1">
              Preparation Time (mins)
            </label>
            <input
              type="number"
              name="time"
              min="1"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <label className="block font-medium mb-1">Categories</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
                (category) => (
                  <label key={category} className="flex items-center gap-2">
                    <input type="checkbox" value={category} name="categories" />
                    {category}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Like Count */}
          <div className="text-sm text-gray-600 lg:col-span-2">
            ❤️ Like Count: {likeCount}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
