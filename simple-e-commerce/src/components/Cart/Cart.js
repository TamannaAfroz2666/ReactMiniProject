import React from 'react';

const Cart = ({carts}) => {
    return (
        <div>
            <h2>Order Summery</h2>
            <h5>Selected items: {carts.length}</h5>
        </div>
    );
};

export default Cart;