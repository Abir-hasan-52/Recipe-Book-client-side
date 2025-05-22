import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const MainLayOut = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
         
      </header>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayOut;
