import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const SavedRecipes = ( ) => {
    const {user}=useContext(AuthContext);
  const queryClient = useQueryClient();

  // 1️⃣ Get all saved recipes of this user
  const { data: savedRecipes = [], isLoading } = useQuery({
    queryKey: ["savedRecipes", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://recipe-book-server-sooty.vercel.app/savedRecipes/${user?.email}`
      );
      return res.json();
    },
    enabled: !!user?.email, // only run if user is logged in
  });

  // 2️⃣ Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(
        `https://recipe-book-server-sooty.vercel.app/savedRecipes/${id}`,
        { method: "DELETE" }
      );
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["savedRecipes", user?.email]);
    },
  });

  // 3️⃣ Handle Delete with SweetAlert
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This recipe will be removed from your saved list!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
        Swal.fire("Deleted!", "Recipe has been removed.", "success");
      }
    });
  };

  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-rose-600 mb-6">
        ⭐ My Saved Recipes
      </h2>

      {savedRecipes.length === 0 ? (
        <p className="text-center text-gray-600">No saved recipes yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {savedRecipes.map((recipe) => (
            <div
              key={recipe._id}
              className="bg-white shadow rounded-2xl p-4 relative hover:shadow-lg transition"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-semibold">{recipe.name}</h3>
              <p className="text-gray-500 text-sm line-clamp-2">
                {recipe.description}
              </p>

              <button
                onClick={() => handleDelete(recipe._id)}
                className="absolute top-3 right-3 text-red-600 text-xl"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRecipes;
