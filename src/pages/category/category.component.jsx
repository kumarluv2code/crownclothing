import React from 'react'
import CollectionItem from '../../components/collectionItem/collectionItem.component'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import './category.styles.scss'
const categoryPage = ({ collection }) => {
  const {title,items} = collection
  return (
    <div className='category-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
      {
        items.map(item => (
          <CollectionItem key={item.id} item={item}/>
        ))
      }
      </div>
    </div>
  )
} 
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});
export default connect(mapStateToProps)(categoryPage) 