import { cartActionTypes } from './cart.types'
export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const deleteItem = item => ({
    type: cartActionTypes.DELETE_ITEM,
    payload: item
});

