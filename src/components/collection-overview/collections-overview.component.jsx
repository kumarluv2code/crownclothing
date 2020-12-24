import React from 'react'
import './collections-overview.styles.scss'
import CollectionPreview from '../collection-preview/collection-preview.component'
import {connect} from 'react-redux'
const collectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
     {
          collections.map(({id,...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
          ))
      }
    </div>
  )
}
const mapStateToProps = state => ({
  collections: state.shop.collections
})
export default connect(mapStateToProps)(collectionsOverview)