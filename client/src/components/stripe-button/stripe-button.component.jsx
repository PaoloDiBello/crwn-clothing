
import React from 'react'
import axios from 'axios'


import StripeCheckout from 'react-stripe-checkout'


const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_P16YUBnRtFClxbjChPa7kzMp00DPs85II8";
    const onToken = token => {
        console.log('token', token);
        axios({
            url: '/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(e => {
            console.log('Payment error: ', JSON.parse(e))
            alert('There was an issue with your payment. Please make sure you use the provided credit card. ')
        })

        alert('Payment successful!');
    }
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
