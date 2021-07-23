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