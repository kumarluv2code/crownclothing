import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'
import { connect } from 'react-redux'
import {clearCart} from '../../redux/cart/cart.actions'
class HomePage extends React.Component {
  render() {
    return (
      <div className='homepage'>
        <Directory />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  clearCart: ()=>dispatch(clearCart())
})
export default connect(null,mapDispatchToProps)(HomePage)