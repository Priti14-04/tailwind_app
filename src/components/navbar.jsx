import React from "react";
import imgLogo from "../assets/Furniture store-bro.png";

function Navbar() {
  return (
    <div className="w-full bg-violet-600 shadow-md text-white px-6 py-3 flex justify-between items-center">
      
     
      <div className="flex items-center gap-3">
        <img 
          src={imgLogo} 
          alt="logo" 
          className="w-14 h-14 object-contain" 
        />
        <span className="text-2xl font-bold">Furniture Store</span>
      </div>

      
      <div className="flex gap-6 text-lg font-medium">
        <a href="#" className="hover:text-gray-200">Home</a>
        <a href="#" className="hover:text-gray-200">Products</a>
        <a href="#" className="hover:text-gray-200">About</a>
        <a href="#" className="hover:text-gray-200">Contact</a>
      </div>

      
      <button className="px-5 py-2 bg-black text-white font-semibold rounded-lg hover:bg-orange-500 transition">
        Shop Now
      </button>
    </div>
  );
}

export default Navbar;
