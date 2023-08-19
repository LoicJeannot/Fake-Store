import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Contact from './pages/Contact/Contact'
import Product from './pages/ProductDetails/ProductDetails'
import Checkout from './pages/Checkout/Checkout'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import CartContextProvider from './Context/CartContext'

function App() {


  return (
    <div>
      <BrowserRouter>
      <CartContextProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={< Homepage />} />
          <Route exact path="/contactus" element={< Contact />} />
          <Route exact path="/details/:productId" element={< ProductDetails />} />
          <Route exact path="/checkout" element={< Checkout />} />
        </Routes>
        <Footer />
        </CartContextProvider>
      </BrowserRouter>
      
    </div>
  )
}

export default App
