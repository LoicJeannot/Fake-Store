import { useState, useEffect, createContext } from "react";

export const CartContext = createContext()

export default function CartContextProvider(props) {
    
    const [cart, setCart] = useState([])

    useEffect(()=> {
        const storedCart = localStorage.getItem('cartList')
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, []
    )

    useEffect(()=> {
        localStorage.setItem('cartList', JSON.stringify(cart))
    }, [cart]
    )

    const addItem = (itemToAdd) => {
        
        let newCart = [...cart, itemToAdd]
        setCart(newCart)
    }
    const removeItem = (itemId) => {
        let newCart = cart.filter(item=>item.id != itemId)
        
        setCart(newCart)

    }
    return (
        <CartContext.Provider value={{cart, addItem, removeItem}}>
            {props.children}
        </CartContext.Provider>
    )
}