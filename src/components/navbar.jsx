import React from "react";
import imgLogo from "../assets/Furniture store-bro.png";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="w-full bg-violet-600 shadow-md text-white px-6 py-3 flex justify-between items-center">
      
     
      <Link className="flex items-center gap-3" to="/">
        <img 
          src={imgLogo} 
          alt="logo" 
          className="w-14 h-14 " 
        />
        <span className="text-2xl font-bold">Furniture Store</span>
      </Link>

    </div>
  );
}

export default Navbar;
