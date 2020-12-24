import React from 'react'
import './collectionItem.styles.scss'
import Button from '../button/button.component'
import { connect } from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions' 
const collectionItem = ({ item,addItem }) => {
  const {name,price, imageUrl} = item
    return (
      <div className='collection-item'>
        <div style={{
          backgroundImage: `url(${imageUrl})`
        }} className='image' />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>${price}</span>
        </div>
        <Button inverted onClick={()=>addItem(item)}>Add to cart </Button>
      </div>
    )
}
const mapDispatchToProps = dispatch => ({
  addItem:(item)=>dispatch(addItem(item)),
})
export default connect(null,mapDispatchToProps)(collectionItem)