import React from "react";
import logo from "../assets/logo-transparent.png";
import { NavLink } from "react-router";
import { MdNightlight } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 p-0 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                 <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
            >
              Home
            </NavLink>
            </li>

            <li>
              <NavLink
                to="/addRecipe"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                Add Recipe
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/myRecipes"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                My Recipes
              </NavLink>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-20 hidden lg:flex" src={logo} alt="" /> Recipe Book
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
                 <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
            >
              Home
            </NavLink>
            </li>

            <li>
              <NavLink
                to="/addRecipe"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                Add Recipe
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/myRecipes"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
              >
                My Recipes
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end pr-4">
          <a className="btn mr-2">Login</a>
          <p><MdNightlight size={25} /></p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
