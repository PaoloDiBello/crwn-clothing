
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import React from 'react'

const CartIcon = (props) => {
    const { toggleCartHidden, itemCount } = props;
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <div className="item-count">{itemCount}</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
