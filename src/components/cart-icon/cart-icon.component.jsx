import React from 'react'
import './cart-icon.styles.scss'
import { createStructuredSelector } from 'reselect'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount} from '../../redux/cart/cart.selector'


const CartIconComponent = ({cartItemCount, toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{cartItemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItemCount: selectCartItemsCount
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIconComponent)