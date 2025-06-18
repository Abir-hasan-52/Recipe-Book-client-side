import React, { useState } from 'react';

const About = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-5xl font-bold text-center mb-4 text-cyan-600">
        About Us
      </h1>
      <hr className="border-2 border-cyan-400 w-32 mx-auto mb-10" />

      <div className="text-lg leading-relaxed text-gray-700 space-y-6">
        <p>
          Welcome to <span className="font-semibold text-cyan-600">FoodFusion</span> – your ultimate destination for discovering and sharing the most delicious recipes from around the world. Whether you're a seasoned chef or a kitchen newbie, we have something for everyone!
        </p>

        <p>
          Our mission is simple: to connect people through the joy of cooking. We believe that food brings people together, and with our platform, you can explore recipes, save your favorites, and even share your own creations with a global community.
        </p>

        <p>
          At FoodFusion, we ensure quality and creativity. Every recipe shared goes through a basic review process to make sure it’s clear, accurate, and inspiring. We encourage our users to experiment, add their own twist, and celebrate the diversity of cuisines.
        </p>

        <p>
          Thank you for being part of our growing community. Let’s cook, share, and celebrate food together!
        </p>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-cyan-500">Have Questions?</h2>
        <p className="text-md text-gray-600">
          Feel free to{" "}
          <span
            className="underline text-blue-500 cursor-pointer"
            onClick={() => setShowContact((prev) => !prev)}
          >
            contact us
          </span>{" "}
          anytime.
        </p>
        {showContact && (
          <div className="mt-4 bg-cyan-50 p-4 rounded-lg shadow inline-block">
            <p className="font-semibold text-cyan-700">Email: support@recipebook.com</p>
            <p className="font-semibold text-cyan-700">Phone: +880 1639448792</p>
            <p className="font-semibold text-cyan-700">Address: 123 Recipe Street, Dhaka, Bangladesh</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
