import React from 'react';
import './Cart.css'

const Cart = ({carts}) => {
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <h5>Selected items: {carts.length}</h5>
        </div>
    );
};

export default Cart;