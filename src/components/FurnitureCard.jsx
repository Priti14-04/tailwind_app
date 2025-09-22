import React from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryBatch from './CategoryBatch';





function FurnitureCard( {
    id,
    name,
    description,
    rentalPrice,
    rating,
    category,
    imageUrl
    
  
}){   
const [styleIndex,setStyleIndex]=useState(0);

const showPreviousImg=()=>{
    if(styleIndex===0){
        setStyleIndex(imageUrl.length-1);
    }
    else{
        setStyleIndex(styleIndex-1);
    }
}
const showNextImg=()=>{
    if(styleIndex===imageUrl.length-1){
        setStyleIndex(0);
    }
    else{
        setStyleIndex(styleIndex+1);
    }
}
    
    
    return <div className='border border-gray-300 rounded-lg p-4 m-4 max-w-sm'key={id}>
<CategoryBatch category={category}/>
    
        <span className='text-black absolute top-[100px] bg-white px-4 rounded-full'>{rentalPrice}</span>

    <div className='shadow-lg rounded-lg relative overflow-hidden'>

       {styleIndex > 0 && (
  <ChevronLeft 
    className="absolute text-white left-0 top-[70px] h-[50px] w-[50px] cursor-pointer"
    onClick={showPreviousImg}
  />
)}

{styleIndex < imageUrl.length - 1 && (
  <ChevronRight 
    className="absolute text-white right-0 top-[70px] h-[50px] w-[50px] cursor-pointer"
    onClick={showNextImg}
  />
)}

       
        

    <img src={imageUrl[styleIndex]} 
    alt={name}
    className='w-full h-48 object-cover rounded-md'/>
    </div>
    

    <h2 className='text-xl md:text-xl text-state-700 mt-2'>{name}</h2>
    <p className='text-gray-600'>{description}</p>
    <p className='text-gray-800 font-semibold mt-2'>Rental Price: {rentalPrice}</p>
    <p className='text-yellow-500 font-semibold mt-2'>Rating: {rating} / 5</p>
    <p className='text-gray-500 mt-2'>Category: {category}</p>

   <Link 
  className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300" 
  to={`/furniture-details?id=${id}`}   
>
  Buy Now
</Link>

</div>
    
      
   }

export default FurnitureCard
