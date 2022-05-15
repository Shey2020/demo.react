import React, { useContext } from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
import QuantityBtn from"./QuantityBtn"
import { CartContext } from './CartContext'

export default function CheckOut() {
  let {cartItems}=useContext(CartContext)
  let cartEmpty=cartItems.length<=0?true:false
  
  let grandTotal=cartItems.reduce((total,product)=>{
    return total+=product.price*product.quantity
  },0)
  const freeShippingPrice=100

  return (
    <div>
      <Title mainTitle='Your Cart'/>

      {
        cartEmpty&&
        <div>
          No product in your cart now<br/>
          <Link to="/">Look at the products</Link>
        </div>
      }

      {
        !cartEmpty&&
          <div>
              <div id="cartSection">
                {
                  cartItems.map(product=>(
                      <div key={product.id}>
                        <img src={process.env.PUBLIC_URL+'/img/'+product.image}/>
                        {product.name}
                        {product.description}
                        {product.price}
                        Quantity{product.quantity}
                        <QuantityBtn productInfo={product}/>
                    </div>
                  ))
                }
              </div>
                

              <div id="checkOutSection">
                <div>Total</div>
                <div>${grandTotal}</div>

                {
                  grandTotal>=freeShippingPrice?
                  <div>Free Shipping</div>:
                  <div>Free Shipping for ${freeShippingPrice} or above<br/>
                  Purchase ${freeShippingPrice-grandTotal} more
                  </div>
                }
              </div>
          </div>
      }

    </div>
  )
}
