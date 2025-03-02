import React from 'react'
import{ BrowserRouter, Route, Routes }from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Meun from './Pages/Menu'
import Notfound from './Pages/Notfound'
import AddCart from './Pages/AddCart'
import { CartProvider } from './context/CartContext'
import './index.css'

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>   
          <Route path='/menu' element={<Meun/>}/>
          <Route path='/addcart' element={<AddCart/>}/>
          <Route path='/*' element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App