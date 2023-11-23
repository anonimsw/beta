import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products--title'
import Cart from './pages/Cart'
  
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products-title/:title' element={<Products />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default App