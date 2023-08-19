import React, {useContext} from 'react'
import './Header.css'
import { CartContext } from '../../Context/CartContext'
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {

  const { cart } = useContext(CartContext);

  return (
    <header>
        <a href={'/'}>Fake Store</a>
        <div className='container-right'>
          <p className='cart-number'>{cart.length}</p>
          <a href={'/checkout'}><FaCartShopping className='shopping-icon'/></a>
        </div>
    </header>
  )
}
