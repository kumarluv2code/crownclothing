import React from 'react' 
import { auth, createUserProfileDocument } from '../../firebase/firebase.util'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import './SignUp.styles.scss'
class SignUp extends React.Component{
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword:''
  }

  onSubmitHandler = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Password dosent match')
      return;
    }
    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword:''
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({[name]:value})
  }

  render() {
    const {displayName,email,password,confirmPassword} = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.onSubmitHandler}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChangeHandler={this.onChangeHandler}
            label='DisplayName'
            required />
           <FormInput
            type='email'
            name='email'
            value={email}
            onChangeHandler={this.onChangeHandler}
            label='Email'
            required />
           <FormInput
            type='password'
            name='password'
            value={password}
            onChangeHandler={this.onChangeHandler}
            label='Password'
            required />
           <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChangeHandler={this.onChangeHandler}
            label='ConfirmPassword'
            required />
          <Button type='submit'>SIGN UP</Button>
        </form>
      </div>
    )
  }
}
export default SignUp