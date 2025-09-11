import React from 'react'
import Navbar from '../components/navbar.jsx'
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
            className="rounded-lg shadow-lg max-h-[600px] w-auto object-contain"
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
          Shop with us today and transform your house into a home filled with warmth, beauty, and style.
        </p>

        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-violet-600 text-white rounded-lg shadow hover:bg-violet-700 transition">
            Shop Now
          </button>
        </div>
      </div>

      
      <section className="my-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-violet-700">Featured Furniture</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img src="https://th.bing.com/th/id/OPAC.3rc9b8kAvir6Ew474C474?w=169&h=169&rs=1&o=5&dpr=1.5&pid=21.1" alt="Sofa" className="mx-auto h-40 object-cover mb-4 rounded"/>
            <h3 className="font-bold">Comfort Sofa</h3>
            <p className="text-gray-600">₹15,000</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img src="https://th.bing.com/th/id/OIP._8qRhXMuZZiH1-YZDXQGegHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="Table" className="mx-auto h-40 object-cover mb-4 rounded"/>
            <h3 className="font-bold">Dining Table</h3>
            <p className="text-gray-600">₹12,500</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img src="https://th.bing.com/th/id/OPAC.KJHphCO85gNXsQ474C474?w=160&h=160&rs=1&o=5&dpr=1.5&pid=21.1" alt="Chair" className="mx-auto h-40 object-cover mb-4 rounded"/>
            <h3 className="font-bold">Wooden Chair</h3>
            <p className="text-gray-600">₹3,000</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img src="https://tse4.mm.bing.net/th/id/OIP.RKcA6crdz66XIC6QzVDuKwHaFj?w=1500&h=1125&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Bed" className="mx-auto h-40 object-cover mb-4 rounded"/>
            <h3 className="font-bold">King Size Bed</h3>
            <p className="text-gray-600">₹25,000</p>
          </div>
        </div>
      </section>

      
      <section className="bg-violet-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-violet-700">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg">High Quality</h3>
            <p className="text-gray-600">Our furniture is made from durable materials for long-lasting comfort.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg">Affordable Prices</h3>
            <p className="text-gray-600">We offer the best value without compromising on style.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg">Free Delivery</h3>
            <p className="text-gray-600">Enjoy free doorstep delivery on all furniture orders.</p>
          </div>
        </div>
      </section>

      
      <section className="my-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-violet-700">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-700 italic">"The sofa I bought was super comfy and stylish. Perfect for my living room!"</p>
            <p className="mt-3 font-bold">- Anjali, Pune</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-700 italic">"Excellent service and on-time delivery. Highly recommend this store!"</p>
            <p className="mt-3 font-bold">- Rajesh, Mumbai</p>
          </div>
        </div>
      </section>

     
      <footer className="bg-violet-600 text-white py-6 text-center">
        <p>© 2025 Furniture Store. All Rights Reserved.</p>
        <p className="mt-2">Made with ❤️ using React & TailwindCSS</p>
      </footer>
    </div>
  )
}

export default Home
