import React from 'react'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        (cartItems.map(item =>
                            <CartItem key={item.id} id={item.id} item={item} />
                        ))
                        : (
                            <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                        )
                }
            </CartItemsContainer>

            <CartDropdownButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO THE CHECKOUT</CartDropdownButton >
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown))


