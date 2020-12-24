import React from 'react'
import './button.styles.scss'
const button = ({children,inverted,isGoogleSignIn,...otherButtonProps}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
    {...otherButtonProps}>
  {children}
  </button>
)
export default button