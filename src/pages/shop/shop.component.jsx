import React from 'react'
import { connect } from 'react-redux'
import CollectionsOverview from '../../components/collection-overview/collections-overview.component'
import CategoryPage from '../category/category.component'
import { Route } from 'react-router-dom'
const Shop = ({match}) => {
    return (
      <div>
        <Route exact path={`${match.url}`} component={CollectionsOverview}/>      
        <Route  path={`${match.url}/:categoryId`} component={CategoryPage}/>      
      </div>
    )
  }
const mapStateToProps = state => ({
  collections:state.shop.collections
})
export default connect(mapStateToProps)(Shop)