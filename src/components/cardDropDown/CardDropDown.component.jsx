import React from 'react'
import Button from '../button/button.component'
import './CardDropDown.styles.scss'
import { connect } from 'react-redux'
import CartItem from '../cartItem/cartItem.component'
import { withRouter } from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
const cardDropDown = ({cartItems,history,dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length?(
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
        ))) : (<span className='empty-message'>Your Cart is Empty</span>)
    }
    </div>
    <Button onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHidden())
    }}
    >
      GO TO CHECKOUT
      </Button>
  </div>
)
const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})
export default withRouter(connect(mapStateToProps)(cardDropDown))