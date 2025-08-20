// src/components/Logo.jsx
import React from "react";
 

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Canva theke export kora image */}
      <img
        src="https://i.ibb.co.com/1tZkhLF7/Brown-Culinary-Hunter-Food-Logo.png"  
        alt="DailyDish Logo"
        width="80px"
        
      />
      {/* Optional: Text next to logo */}
      <span className="text-2xl font-bold text-rose-600">DailyDish</span>
    </div>
  );
};

export default Logo;
