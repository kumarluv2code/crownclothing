import React from 'react'
import FormInput from '../form-input/form-input.component'
import './SignIn.styles.scss'
import Button from '../button/button.component'
import {auth,signInWithGoogle} from '../../firebase/firebase.util'

class SignIn extends React.Component{
  state = {
      email: '',
      password: '',
    }
     onSubmitHandler = async event => {
       event.preventDefault();
       const { email, password } = this.state
      try {
            await auth.signInWithEmailAndPassword(email,password)
      } catch (error) {
        console.log('ERROR IN SIGNUP WITH EMAIL AND PASSWORD',error.message)
        this.setState({email:'',password:''})
      }
     }
  onChangeHandler = (event) => {
    const { name, value } = event.target
    this.setState({[name]:value})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.onSubmitHandler}>
          <FormInput
            onChangeHandler={this.onChangeHandler}
            type='email'
            name='email'
            value={this.state.email}
            required
            label='email'
          />
          <FormInput
            onChangeHandler={this.onChangeHandler}
            type='password'
            name='password'
            value={this.state.password}
            required
            label='password'
          />
          <div className='buttons'>
          <Button type='submit'>Sign in</Button>
            <Button
              onClick={signInWithGoogle}
              isGoogleSignIn>
            Sign in with Google
          </Button>
          </div>
        </form>
      </div>
    )
  }
}
export default SignIn