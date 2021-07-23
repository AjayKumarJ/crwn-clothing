import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => {
    return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
}
export const  addItem  = item => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
}

export const removeItem = item => {
    return {
        type: CartActionTypes.REMOVE_ITEM_FROM_CART,
        payload: item
    }
}

export const clearItem = item => {
    console.log("clear Item ", item)
    return {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    }
}