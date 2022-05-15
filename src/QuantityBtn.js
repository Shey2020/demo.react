import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from './CartContext'

export default function QuantityBtn({productInfo}) {

    const {cartItems,setCartItems}=useContext(CartContext)
    
    let productIndexInCart=cartItems.findIndex((element)=>{
        return element.id===productInfo.id
    })

    let [numInCart,setNumInCart]=useState(
        (productIndexInCart===-1)?0:
        cartItems[productIndexInCart].quantity
    )

    const handleAdd=()=>{
        if(productIndexInCart===-1){
            //no product, push element to cartItems
            setCartItems([{
                id:productInfo.id,
                name:productInfo.name,
                image:productInfo.image,
                price:productInfo.price,
                description:productInfo.description,
                quantity:1
            },
            ...cartItems]
            )
        }else{
            //existing product update quantity
            let newCartArr=[...cartItems]
            newCartArr[productIndexInCart].quantity++
            setCartItems(newCartArr)
        }
        setNumInCart(numInCart+1)
    }
    const handleSubtract=()=>{
        if(cartItems[productIndexInCart].quantity===1){
            //one left in cart, remove object
            let newCartArr = [...cartItems]
            newCartArr.splice(productIndexInCart,1)
            setCartItems(newCartArr)
        }else{
            //more than one, minus quantity
            let newCartArr = [...cartItems]
            newCartArr[productIndexInCart].quantity--
            setCartItems(newCartArr)
        }
        setNumInCart(numInCart-1)
    }
  return (
    <div>
        { (numInCart===0)?
            <div onClick={handleAdd}>Add to Cart</div>:
            <div>
                <span onClick={handleSubtract}>-</span>
                {numInCart}
                <span onClick={handleAdd}>+</span>
            </div>
        }
    </div>
  )
}
