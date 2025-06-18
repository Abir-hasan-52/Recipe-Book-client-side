import React from "react";
import TopRecipes from "./TopRecipes";
import Hero from "./Hero";
import Chef from "./Chef";
import { Typewriter } from "react-simple-typewriter";
import About from "./About";

const Home = () => {
  return (
    <div>
      <section className="my-4">
        <h1 className="text-5xl  text-cyan-600 text-center font-bold">
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
        <h1 className="text-5xl font-bold text-center mb-4 text-cyan-600">
          Top Recipes 
      </h1>
      <hr className="border-2 border-cyan-400 w-32 mx-auto mb-10" />
        <p className="text-center text-gray-500 mb-8">
          Explore the most popular recipes shared by our community today.</p>
        <TopRecipes />
      </section>
      <section>
        <Chef />
      </section>
      <section>
        <About></About>
      </section>
    </div>
  );
};

export default Home;
