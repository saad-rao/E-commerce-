
import './App.css'
import About from './components/About'
import ProductGrid from './components/Cards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroSection from './components/Hero'
import Home from './components/Home'
import TopSeller from './components/TopSeller'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const allPaths = createBrowserRouter([
  {
    path : "/",
    element : (
      <>
      <Home />
      <HeroSection/>
      <ProductGrid />
      <TopSeller />
      <Footer />
      </>
    )
  },

  {
    path : "/about",
    element : <About />
  },

  {
    path : "/contact",
    element : <Contact />
  },


 
])



function App() {
  return <RouterProvider router={allPaths} />

}

export default App
