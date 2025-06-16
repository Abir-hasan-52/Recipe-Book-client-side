import React, { useState } from "react";
import { Link } from "react-router";

const TopRecipes = () => {
    const [topRecipes, setTopRecipes]=useState([]);
  fetch("http://localhost:3000/recipes/top")
    .then((res) => res.json())
    .then((data) => {
      setTopRecipes(data);
    });
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        {topRecipes.map((recipe) => (
          <div key={recipe._id} className="card shadow-lg p-4">
            <img src={recipe.image || "placeholder.jpg"} alt={recipe.title} />
            <h2 className="text-xl font-bold">{recipe.title}</h2>
            <p>Cuisine: {recipe.cuisineType}</p>
            <p>Likes: {recipe.likeCount}</p>
            <Link to={`/AllRecipes/${recipe._id}`}>
              <button className="btn btn-primary mt-2">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRecipes;
