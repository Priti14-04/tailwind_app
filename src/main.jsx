import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./view/home.jsx"
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import AllFurniture from './view/AllFurniture.jsx'
import Contact from './view/Contact.jsx'
import BookinPage from './view/BookinPage.jsx'
import FurnitureDetails from './view/FurnitureDetails.jsx'
const rootElement = createRoot(document.getElementById('root'))

rootElement.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<AllFurniture />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<BookinPage />} /> 
        <Route path="/furniture-details" element={<FurnitureDetails />} /> 
      </Routes>
    </BrowserRouter>
  </div>
)
