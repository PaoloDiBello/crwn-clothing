import './cart-dropdown.styles.scss';
import CustomButton from '../../custom-button/custom-button.component'

import React from 'react'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-item">
            </div>
            <CustomButton>GO TO THE CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown


