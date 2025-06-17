import React from "react";
import { Link } from "react-router";
import { FaHamburger } from "react-icons/fa";
import { GiHotSpices, GiSlicedBread } from "react-icons/gi";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50 px-6 py-12 text-center">
      <div className="max-w-xl">
        <div className="text-9xl mb-4 text-red-500 font-bold flex justify-center gap-3">
          <FaHamburger />
          <span>404</span>
          <GiSlicedBread />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Oops! Page Not Tasty 🍽️
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Looks like this page is still in the oven or just got eaten! <br />
          Try heading back to the homepage and grab something delicious.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition-all"
        >
          <GiHotSpices className="text-xl" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
