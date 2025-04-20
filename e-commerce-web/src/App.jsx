
import './App.css'
import About from './components/About'
import ProductGrid from './components/Cards'
import Contact from './components/Contact'
import HeroSection from './components/Hero'
import Home from './components/Home'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const allPaths = createBrowserRouter([
  {
    path : "/",
    element : (
      <>
      <Home />
      <HeroSection/>
      <ProductGrid />
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
