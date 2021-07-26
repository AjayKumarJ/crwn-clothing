import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IDsvSHMjpAum0PY1vA1M3R5fuHYlEKS1RRWOkqCpOMUfyKcSi7RLhFjhA2DXIdDpUYLHlW2RuTNJY8Zq5kTCz3U00UE6fRhiW'
    const onToken = token => {
        console.log(token)
        alert('Payment got successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Cowing Test'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            amount={priceForStripe}
            description={`Your total is $${price}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton