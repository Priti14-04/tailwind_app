import React from 'react'
import Navbar from '../components/navbar.jsx'
import FeatureSection from '../components/FeatureSection.jsx'
import imgFeatureFurniture from '../assets/Furniture store-amico.png'

function Home() {
  return (
    <div>
    
      <Navbar />
     
    
      <div className="m-10 mt-20">
        <div className="flex justify-center">
          <img
            src={imgFeatureFurniture}
            alt="feature_furniture"
            className="rounded-lg  max-h-[600px] w-auto"
          />
        </div>

        <h1 className="text-center text-4xl my-5 font-bold text-violet-700">
          Buy Quality Furniture with Comfort & Style
        </h1>

        <p className="text-center text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
          Discover a wide range of stylish, durable, and affordable furniture for your home. 
          From cozy sofas and elegant dining sets to spacious wardrobes and modern work desks, 
          we bring you designs that combine comfort with functionality. Our furniture is crafted 
          with care to enhance your living space, ensuring long-lasting quality and timeless appeal. 
          Shop with us today and transform your house/home into a home filled with warmth, beauty, and style.
        </p>
 <FeatureSection/>
      </div>

        </div>
      
  )
}

export default Home
