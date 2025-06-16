import React from "react";

import TopRecipes from "./TopRecipes";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <section className="my-4">
        <h1 className="text-5xl text-center font-bold mt-10">Welcome to Recipe World</h1>
        <p className="text-center mt-8 text-gray-500 pb-5">
          Discover, create, and share your favorite recipes with the world.</p>
        <Hero></Hero>
      </section>
      <section>
        <h2 className="text-4xl text-center font-bold">Top Recipes</h2>
        <p className="text-center text-gray-400 py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolorem reprehenderit pariatur quia voluptas laudantium at quos est, quod placeat, dolor consectetur amet, cum facere labore doloribus. Repudiandae, dolorem suscipit.</p>
         <TopRecipes></TopRecipes>
      </section>
    </div>
  );
};

export default Home;
