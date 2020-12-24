import React from 'react'
import {ReactComponent as CartIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const cartIcon = ({toggleCartHidden,itemCount}) => (
  <div className='cart-icon'>
    <CartIcon className='shopping-icon' onClick={toggleCartHidden}/>
    <span className='item-count'>{itemCount}</span>
  </div>  
)
const mapStateToProps = ({cart:{cartItems}}) => ({
  itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0)
})
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: ()=>dispatch(toggleCartHidden())  
})
export default connect(mapStateToProps,mapDispatchToProps)(cartIcon)