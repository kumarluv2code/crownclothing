import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.util' 
import { createUserProfileDocument } from './firebase/firebase.util'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import {Redirect} from 'react-router-dom'
import CheckOut from './components/checkout/checkout.component'
import Contact from './components/contact/contact.component'
class App extends React.Component{
   unSubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props
   this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth)
       userRef.onSnapshot(snapshot => {
       setCurrentUser({
             id: snapshot.id,
             ...snapshot.data(),
           })
         })
     }
     //setting current user to null when user logout
    setCurrentUser( userAuth)
    })
  }
 
  componentDidUnMount() {
    this.unSubscribeFromAuth();
  }ShopPage

  render() {
    return (
    <div>
        <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
          <Route path='/checkout' component={CheckOut} />
          <Route path='/contact' component={Contact}/>
          <Route path='/signin' render={() => this.props.currentUser ? (
            <Redirect to='/' />) : (
              <SignInAndSignUp />)}
          />
      </Switch>
    </div>
  );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser : (user)=>dispatch(setCurrentUser(user))
})
const mapStateToProps = state => ({
  currentUser:state.user.currentUser
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
