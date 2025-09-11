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

const rootElement = createRoot(document.getElementById('root'))

rootElement.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} /> {/* Optional extra route */}
      </Routes>
    </BrowserRouter>
  </div>
)
