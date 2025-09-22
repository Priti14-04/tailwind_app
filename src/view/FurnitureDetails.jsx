import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/navbar';
import { FURNITURE_CONFIG } from '../configs/furnitures';

import Heading from '../components/heading';
import ReviewCard from '../components/ReviewCard';
import CategoryBatch from '../components/CategoryBatch';

function FurnitureDetails() { 
  const [searchParams] = useSearchParams();  
  const id = searchParams.get('id');  
  const furniture = FURNITURE_CONFIG.find((item) => item.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div>
      <Navbar/>
      
      <Heading heading={`lets explore the ${furniture.name}`} className={"mt-4! mb-4"}/>
      <CategoryBatch/>

      <div className='text-2lx font-semibold flex gap-10 m-10 item-center justify-center mx-auto'>
        {/* Thumbnail images */}
        <div className='flex flex-col bg-white p-4 rounded-lg shadow-md'>
          {
            furniture.imageUrl.map((image, index) => {
              return (
                <img 
                  key={index}
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className={`w-24 h-24 object-cover mb-2 cursor-pointer border-2 ${index === currentImageIndex ? 'border-violet-600' : 'border-transparent'}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              )
            })
          }
        </div>

        {/* Main Image + Rating */}
        <div className='flex flex-col items-center gap-6'>
          {/* Only Rating Stars */}
        <ReviewCard rating={furniture.rating} size={"lg"}/>

          {/* Main Image */}
          <img 
            src={furniture.imageUrl[currentImageIndex]} 
            alt={furniture.name}
            className='w-[500px] h-[500px] object-cover rounded-lg shadow-md' 
          />
        </div>
      </div>
      <div className='max-w-4xl mx-auto p-9 mx-auto w-[700px]  bg-violet-200'>

        <h2 className='text-3xl'>Booking Form</h2>
      </div>
    </div>
  )
}

export default FurnitureDetails
