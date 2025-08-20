// src/components/AllRecipes.jsx

import { useContext, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";

const AllRecipes = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const [likedRecipes, setLikedRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  // 1️⃣ Fetch all recipes
  const { data: recipes = [], isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      const res = await fetch("https://recipe-book-server-sooty.vercel.app/recipes");
      return res.json();
    },
  });

  // 2️⃣ Like mutation
  const likeMutation = useMutation({
    mutationFn: async (recipeId) => {
      const res = await fetch("https://recipe-book-server-sooty.vercel.app/recipes/like", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recipeId, userEmail: user?.email }),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["recipes"]);
    },
  });

  // 3️⃣ Save mutation (full recipe object)
  const saveMutation = useMutation({
    mutationFn: async (recipe) => {
      const res = await fetch("https://recipe-book-server-sooty.vercel.app/savedRecipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail: user?.email, recipe }),
      });
      return res.json();
    },
    onSuccess: (data) => {
      if (data.message?.includes("already")) {
        Swal.fire("Oops!", "Recipe already saved!", "warning");
      } else {
        Swal.fire("Saved!", "Recipe added to your favorites.", "success");
        setSavedRecipes((prev) => [...prev, data.insertedId]);
        queryClient.invalidateQueries(["savedRecipes"]);
      }
    },
    onError: (err) => {
      Swal.fire("Error", err.message, "error");
    },
  });

  // 4️⃣ Handle Like
  const handleLike = (id) => {
    if (!user) {
      Swal.fire("Login Required", "Please login to like recipes.", "warning");
      return;
    }

    if (likedRecipes.includes(id)) {
      setLikedRecipes((prev) => prev.filter((rid) => rid !== id));
    } else {
      likeMutation.mutate(id);
      setLikedRecipes((prev) => [...prev, id]);
    }
  };

  // 5️⃣ Handle Save (pass full recipe)
  const handleSave = (recipe) => {
    if (!user) {
      Swal.fire("Login Required", "Please login to save recipes.", "warning");
      return;
    }

    if (savedRecipes.includes(recipe._id)) {
      Swal.fire("Info", "You already saved this recipe!", "info");
      return;
    }
    saveMutation.mutate(recipe);
  };

  if (isLoading) return <p className="text-center py-10">Loading recipes...</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe._id}
          className="border rounded-xl shadow-md p-4 relative bg-white hover:shadow-lg transition"
        >
          <img
            src={recipe.image || "https://via.placeholder.com/300"}
            alt={recipe.title}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-3">{recipe.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{recipe.description}</p>

          {/* Like Button */}
          <button
            onClick={() => handleLike(recipe._id)}
            className="absolute top-3 left-3 text-red-500 text-xl"
          >
            {likedRecipes.includes(recipe._id) ? <FaHeart /> : <FaRegHeart />}
          </button>

          {/* Save Button */}
          <button
            onClick={() => handleSave(recipe)}
            className="absolute top-3 right-3 text-yellow-500 text-xl"
          >
            {savedRecipes.includes(recipe._id) ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllRecipes;
