import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateRecipe = () => {
  const recipe = useLoaderData();
  // console.log(recipe);
  const {
    _id,
    image,
    title,
    ingredients,
    instructions,
    cuisine,
    time,
    categories,
  } = recipe;
  const handleUpdateRecipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedRecipe = Object.fromEntries(formData.entries());
    // console.log(updatedRecipe);
    // send updated recipe to the DB

    fetch(`https://recipe-book-server-sooty.vercel.app/recipes/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Recipe Updated Successful.",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };
  return (
    <div className="w-8/12 mx-auto p-6 bg-amber-100  rounded-2xl shadow-md mt-12 ">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Recipe</h2>
      <p className="text-gray-600 text-sm mb-4 text-center">
        Share your favorite recipe with the world! Fill in the details below and
        inspire others to cook something delicious.
      </p>

      <form onSubmit={handleUpdateRecipe} className="space-y-4">
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Image URL */}
          <div>
            <label className="block font-medium mb-1">Recipe Image</label>
            <input
              type="text"
              name="image"
              defaultValue={image}
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
              defaultValue={title}
              placeholder="Enter recipe title"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Ingredients */}
          <div className="lg:col-span-2">
            <label className="block font-medium mb-1">Ingredients</label>
            <textarea
              name="ingredients"
              defaultValue={ingredients}
              placeholder="List ingredients"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <label className="block font-medium mb-1">Instructions</label>
            <textarea
              name="instructions"
              defaultValue={instructions}
              placeholder="Describe preparation steps"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Cuisine Type */}
          <div>
            <label className="block font-medium mb-1">Cuisine Type</label>
            <select
              name="cuisine"
              defaultValue={cuisine}
              className="w-full border p-2 rounded"
            >
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
              defaultValue={time ? parseInt(time) : ""}
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
                    <input
                      type="checkbox"
                      name="categories"
                      value={category}
                      defaultChecked={categories.includes(category)}
                    />
                    {category}
                  </label>
                )
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
         
          
          <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition"
        >
          Update Recipe
        </button>
          
        
      </form>
    </div>
  );
};

export default UpdateRecipe;
