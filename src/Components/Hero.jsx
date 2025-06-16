import React from "react";

const Hero = () => {
  return (
    <div className="carousel w-full rounded-xl overflow-hidden shadow-2xl">
      
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/cKn4SM04/Beef-Tacos.webp"
          className="w-full object-cover max-h-[600px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-6">
          <h2 className="text-4xl font-bold mb-3">Delicious Beef Tacos</h2>
          <p className="max-w-lg text-lg mb-4">
            Explore a world of flavors with our mouth-watering beef tacos!
          </p>
          <a href="#recipes" className="btn btn-primary px-6">
            View Recipes
          </a>
        </div>
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a
            href="#slide4"
            className="btn btn-circle bg-white text-black hover:bg-pink-300"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-white text-black hover:bg-pink-300"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/GQdxwYb3/images-4.jpg"
          className="w-full object-cover max-h-[600px]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-pink-400/40 flex flex-col justify-center items-center text-white text-center p-6">
          <h2 className="text-4xl font-bold mb-3">Fresh Summer Salad</h2>
          <p className="max-w-lg text-lg mb-4">
            Light, healthy, and perfect for hot days!
          </p>
          <a href="#recipes" className="btn btn-accent px-6">
            Discover More
          </a>
        </div>
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a
            href="#slide1"
            className="btn btn-circle bg-white text-black hover:bg-purple-300"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-white text-black hover:bg-purple-300"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/VsvrkVT/Vegan-Pancakes-Recipe-2-1200-1200x800.jpg"
          className="w-full object-cover max-h-[600px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center p-6">
          <h2 className="text-4xl font-bold mb-3">Vegan Pancakes</h2>
          <p className="max-w-lg text-lg mb-4">
            Soft, fluffy and plant-based goodness on a plate!
          </p>
          <a href="#recipes" className="btn btn-secondary px-6">
            Try Now
          </a>
        </div>
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a
            href="#slide2"
            className="btn btn-circle bg-white text-black hover:bg-yellow-300"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-white text-black hover:bg-yellow-300"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full object-cover max-h-[600px]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 to-teal-400/30 flex flex-col justify-center items-center text-white text-center p-6">
          <h2 className="text-4xl font-bold mb-3">Exotic Delights</h2>
          <p className="max-w-lg text-lg mb-4">
            Discover exotic recipes from around the world!
          </p>
          <a href="#recipes" className="btn btn-info px-6">
            Explore
          </a>
        </div>
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <a
            href="#slide3"
            className="btn btn-circle bg-white text-black hover:bg-blue-300"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-white text-black hover:bg-blue-300"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
