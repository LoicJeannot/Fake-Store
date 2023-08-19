import React,{useEffect,useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import axios from 'axios'
import { CartContext } from '../../Context/CartContext'

function ProductDetails() {
  const {productId} = useParams()
  const [product, setProduct] = React.useState('')
  const {addItem, cart, removeItem} = useContext(CartContext);
  const [isCart, setIsCart] = useState(false);

  React.useEffect( 
    () => {
      axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res =>{
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err=> console.log(err))
      
    },[]

  )

  React.useEffect(
    ()=>{
      
      setIsCart(cart?.find(item=>item.id===product.id))
    }, [cart, product]
  )
  
  return (
    <div className='details-container'>
      <img src={product.image}/>
      <div className='description-container'>
        <p>{product?.title}</p> <br/>
        <p>{product?.price}€</p><br/>
        <h6>Description</h6>
        <p>{product?.description}</p>
        {
          isCart?
          <button className='detail-btn' onClick={()=>removeItem(product.id)}>Remove Item</button>
          :
          <button onClick={()=>addItem(product)} className='detail-butn'>Add Item</button>
        }
      </div>
    </div>
  )
}

export default ProductDetails