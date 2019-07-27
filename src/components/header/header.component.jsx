import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'

import CartIcon from '../cart-icon/cart-icon.component'

import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component'

import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/" className="option">
                    CONTACT
                {currentUser && currentUser.userAuth}
                </Link>
                {currentUser ?
                    (
                        <div className="option" onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                    ) : (
                        <Link to="/signin" className="option">
                            SIGN IN
                        </Link>
                    )
                }
                <CartIcon />
            </div>
            {hidden && <CartDropdown />}
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)
