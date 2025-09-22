import React from "react";
import Navbar from "../components/navbar";
import imgFurnitureHeading from "../assets/Furniture.jpg";

import Heading from '../components/heading'
import { FURNITURE_CONFIG } from "../configs/furnitures";
import FurnitureCard from "../components/FurnitureCard";

function AllFurniture() {
  return (
    <div>
      <Navbar />
      <img src={imgFurnitureHeading} alt="Furniture" className="w-full h-[400px] object-contain  md:h[300px]" />
      <Heading heading={"your adventure begin here"}/>

      <p className="mt-4 p-6">Furniture is essential for supporting various human activities, providing both functional and aesthetic value in living and working spaces.Furniture refers to objects intended to support various human activities such as seating (e.g., stools, chairs, and sofas), eating (tables), storing items, working, and sleeping (e.g., beds and hammocks). Furniture is also used to hold objects at a convenient height for work (as horizontal surfaces above the ground, such as tables and desks), or to store things</p>

      <div className="flex flex-row flex-wrap justify-center m-3">
        {FURNITURE_CONFIG.map((furnitureData)=>{

        const {id,name,description,rentalPrice,rating,category,imageUrl}=furnitureData;

        return(
         <FurnitureCard
         key={id}
         id={id}
         name={name}
         description={description}
         rentalPrice={rentalPrice} 
          rating={rating}
          category={category}
         imageUrl={imageUrl} 
          
         />
        )

      })}
      
      </div>
    </div>
  );
}

export default AllFurniture;
