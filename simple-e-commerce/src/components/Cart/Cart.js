import React from 'react';
import './Cart.css'

const Cart = ({carts}) => {

    console.log('cart', carts);
    let total = 0;
    let shipping = 0
    for(const productAll of carts){
         total = total + productAll.price;
         shipping = shipping +productAll.shipping;

    }
    const tax = (total * 0.1).toFixed(2);
    
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected items: {carts.length}</p>
            <p>Total price: {total}</p>
            <p>Total Shipping :{shipping} </p>
            <p>Tax :{tax} </p>
            <h4>Grand Total : </h4>
        </div>
    );
};

export default Cart;