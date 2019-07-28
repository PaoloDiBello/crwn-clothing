import React from 'react'
import './checkout-item.styles.scss'
import { connect } from 'react-redux'
import { deleteItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ item, }) => {
    const { name, quantity, price, imageUrl } = item;
    return (
        <div className="checkout-item">

            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>

            <div className="name">
                {name}
            </div>

            <div className="quantity">
                {quantity}
            </div>

            <div className="price">
                {price}
            </div>

            <div className="remove-button"
                onClick={() => 0}>&#10005;
            </div>


        </div >
    )
}

const mapDispatchToProps = dispatch => ({
    deleteItem: id => dispatch(deleteItem(id))
})



export default connect(null, mapDispatchToProps)(CheckoutItem)
