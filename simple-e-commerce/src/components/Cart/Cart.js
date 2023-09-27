import React from 'react';
import './Cart.css'

const Cart = ({carts}) => {

    // console.log('cart', carts);
    let total = 0;
    let shipping = 0;
    // add quantity 
    let quantity = 0;

    for(const productAll of carts){
        quantity = quantity + productAll.quantity;
         total = total + productAll.price * productAll.quantity;
         shipping = shipping +productAll.shipping;

    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected items: {quantity}</p>
            <p>Total price: {total}</p>
            <p>Total Shipping :{shipping} </p>
            <p>Tax :{tax} </p>
            <h4>Grand Total :{grandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Cart;