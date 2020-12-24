import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import {auth} from '../../firebase/firebase.util'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CardDropDown from '../cardDropDown/CardDropDown.component'

const header = ({ currentUser,hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link to='/' className='option'>HOME</Link>
      <Link to='/shop' className='option'>SHOP</Link>
      {
        currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
            </div>
        ) : (
            <Link className='option' to='/signin'>
              SIGN IN
              </Link>
          )
      }
      {
        currentUser?<CartIcon/>:null
      }
    </div>
    {
      (hidden) ? null :(<CardDropDown/>)   
    }
  </div>
)
const mapStateToProps = ({user: {currentUser},cart: {hidden} }) => ({
  currentUser,
  hidden,
})
export default connect(mapStateToProps)(header)