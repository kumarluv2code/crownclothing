import React from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux'
import CheckOutItems from '../checkout-item/checkout-items.component'
import StripeCheckoutButton from '../stripe-button/stripe-button.component'
const checkOut = ({ cartItems, total }) => {
  console.log('CART ITEMS',cartItems)
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
         <div className='header-block'>
          <span>Description</span>
        </div>
         <div className='header-block'>
          <span>Quantity</span>
        </div>
         <div className='header-block'>
          <span>Price</span>
        </div>
         <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem =>
          <CheckOutItems key={cartItem.id} cartItems={cartItem}/>
        )
      }
      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp:01/22 - CVV: 123
      </div>
      <StripeCheckoutButton price={total}/>
    </div>
  )
}
const mapStateToProps=({cart:{cartItems}})=> ({
  cartItems,
  total: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price,
    0)
})
export default connect(mapStateToProps)(checkOut)