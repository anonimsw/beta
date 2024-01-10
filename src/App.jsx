import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Productstitle from './pages/Productstitle'
  
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products-title/:title' element={<Productstitle />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default App