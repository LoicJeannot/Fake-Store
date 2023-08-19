import React, {useContext, useEffect, useState} from 'react'
import './ProductCard.css'
import {AiTwotoneHeart} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import { CartContext } from '../../Context/CartContext';

function ProductCard({product}) {

  const {addItem, cart, removeItem} = useContext(CartContext);

  const [isCart, setIsCart] = useState(false);

  React.useEffect(
    ()=>{
      
      setIsCart(cart?.find(item=>item.id===product.id))
    }, [cart, product]
  )

  return (
    <div className='product-card'>
        {
          isCart?
          <AiTwotoneHeart className='heart-icon' onClick={()=>removeItem(product.id)}/>
          :
          <AiOutlineHeart onClick={()=>addItem(product)} className='heart-icon' />
        }
        <a href={`/details/${product.id}`}><img src={product.image} /></a>
        <h4>{product.title}</h4>
        <h5 className='category-name'>{product.category}</h5>
        <h5>{product.price}€</h5>
    </div>
  )
}

export default ProductCard