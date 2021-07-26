import React from 'react'
import { connect } from 'react-redux'
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions'
import './checkout-items.styles.scss'


const CheckoutItem = ({cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, quantity, price} = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <div className='name'>{name}</div>
            <div className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </div>
            <div className='price'>{price}</div>
            <div className='remove' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: cartItem => dispatch(clearItem(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem)),
    removeItem: cartItem => dispatch(removeItem(cartItem))
})
export default connect(null,mapDispatchToProps)(CheckoutItem)