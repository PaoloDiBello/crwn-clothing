
import React from 'react'

import './stripe-button.styles.scss'

import StripeCheckout from 'react-stripe-checkout'

const onToken = token => {
    console.log('token', token);
    alert('Payment successful!');
}

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_P16YUBnRtFClxbjChPa7kzMp00DPs85II8";
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRW Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton
