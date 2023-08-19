import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../../Context/CartContext'
import "./Checkout.css"
import { ImBin } from "react-icons/im";
import Modal from 'react-modal'

const customStyles = {
  content: {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate (-50%, -50%)'
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
  }
};

Modal.setAppElement('#root');

function Checkout() {

  const [isOpen, setIsOpen] = React.useState(false)

  const {cart, removeItem} = useContext(CartContext);

  const [total, setTotal] = useState(0)


  console.log(cart)

  React.useEffect (
    () => {
      const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalPrice);
    }
  ), [cart]

  return (
    <div className='checkout-body'>
      <div className='checkout-container'>
        <div className='checkout-legend'>
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Remove</p>
        </div>
        <div className='items'>
      {
        cart.map(item =>
          <div key={item.id} className='item-row'>
          <img src={item.image} />
          <p className='item-title'>{item.title}</p>
          <p>{item.price}€</p>
          <p>1</p>
          <ImBin className='bin-icon' onClick={()=>removeItem(item.id)}/>
          </div>
          )
      }
      </div>
      <p className='total-price'>Total:{total}€</p>
      <button className="checkout-btn" onClick={()=>setIsOpen(true)}>Check Out</button>
      <Modal 
      isOpen={isOpen}
      onRequestClose={()=>setIsOpen(false)} 
      style={customStyles} 
      contentLabel="Contact us Modal"
      >
        <h2 className='modal-title'>Your order was successful!</h2>
        <p>Check your email for the order confirmation. Thank you for ordering with Fake Store</p>
      </Modal>
      </div>
    </div>
  )
}

export default Checkout