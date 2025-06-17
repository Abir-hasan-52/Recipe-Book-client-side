import React from "react";
import TopRecipes from "./TopRecipes";
import Hero from "./Hero";
import Chef from "./Chef";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div>
      <section className="my-4">
        <h1 className="text-5xl text-center font-bold">
          <Typewriter
            words={["Welcome to Recipe World"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-center mt-8 text-gray-500 pb-5">
          Discover, create, and share your favorite recipes with the world.
        </p>
        <Hero />
      </section>
      <section>
        <h2 className="text-4xl text-center font-bold">Top Recipes</h2>
        <p className="text-center text-gray-400 py-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolorem
          reprehenderit pariatur quia voluptas laudantium at quos est, quod
          placeat, dolor consectetur amet, cum facere labore doloribus.
          Repudiandae, dolorem suscipit.
        </p>
        <TopRecipes />
      </section>
      <section>
        <Chef />
      </section>
    </div>
  );
};

export default Home;
