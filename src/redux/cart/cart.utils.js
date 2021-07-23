export const addItem = (cartItems, cartItemtoAdd) => {
    const isItemAlreadyAdded = cartItems.find(
        item => item.id === cartItemtoAdd.id
    )
    if (isItemAlreadyAdded) {
        return cartItems.map(
            cartItem => cartItem.id === cartItemtoAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    return [...cartItems, { ...cartItemtoAdd, quantity: 1}]
}

export const removeItem = (cartItems, cartItemtoRemove) => {
    const existingItem = cartItems.find(item => item.id === cartItemtoRemove.id)
    console.log("removeItem", existingItem)
    if (existingItem.quantity  === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemtoRemove.id)
    }
    return cartItems.map(cartItem => 
            cartItem.id === cartItemtoRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        )
}