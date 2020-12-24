import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { withRouter } from 'react-router-dom'


const stripeCheckoutButton = ({ price, history,clearCart }) => {
  console.log('HISTORY',history)
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HwUgiI3yYB6YH0uwKYmH0uoKmSg0cOue4rAagxgHWTGfttHTAbmhRC1ysnksRPziaesNaBAzJlDLBtOBkgiwa5s004PNTetTK'
  const onTokenHandler = (token) => {
    console.log(token)
    alert('Payment SuccessFul')
    history.push('/')
 }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onTokenHandler}
      stripeKey={publishableKey}
    />
  )
}

export default withRouter(stripeCheckoutButton)
