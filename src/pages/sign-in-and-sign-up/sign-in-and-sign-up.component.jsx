import React from 'react'
import SignIn from '../../components/SignIn/SignIn.component'
import SignUp from '../../components/SignUp/SignUp.component'
import './sign-in-and-sign-up.styles.scss'
const signInAndSignUp = () => (
  <div className='signInAndSignUp'>
    <SignIn/>
    <SignUp/>
  </div>
)
export default signInAndSignUp