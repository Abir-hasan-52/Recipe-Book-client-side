import React, { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyRecipeCard = ({ recipe,setRecipes,recipes }) => {
  const [likeCount, setLikeCount] = useState(recipe.likeCount || 0);
  const [myRecipes, setMyRecipes]=useState([]);
  fetch("https://recipe-book-server-sooty.vercel.app/recipes/myRecipe")
    .then((res) => res.json())
    .then((data) => {
      setMyRecipes(data);
    });
  const { _id, image, title, cuisine, time, ingredients, instructions } =
    recipe;
  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // start deleting recipe
        fetch(`https://recipe-book-server-sooty.vercel.app/recipes/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log('after delete',data)
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your recipe has been deleted.",
                icon: "success",
              });

              const remainingRecipes=recipes.filter(recip=>recip._id!==_id);
              setRecipes(remainingRecipes);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md grid md:grid-cols-2 gap-6 my-5">
      {/* Recipe Image */}
      <div className="w-full ">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>

      {/* Recipe Details */}
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Cuisine:</span> {cuisine}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Preparation Time:</span> {time} mins
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Category:{cuisine}</span>{" "}
          </p>
          <p className="text-sm text-gray-600 mt-3">
            <span className="font-semibold">Ingredients:</span> {ingredients}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-semibold">Instructions:</span> {instructions}
          </p>
        </div>

        {/* Like + Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 items-center">
          <span className="text-gray-700 text-sm">❤️ Likes: {likeCount}</span>
          <div className="flex gap-3 ml-auto">
            <Link to={`/updateRecipe/${_id}`}>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl text-sm">
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRecipeCard;
