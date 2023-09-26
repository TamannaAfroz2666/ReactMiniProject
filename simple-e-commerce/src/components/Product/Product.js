import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, price, seller, ratings } = props.products;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p> price {price}</p>
                <p><small>Seller {seller}</small></p>
                <p><small>Ratings {ratings}</small></p>
            </div>
            <button className='btnCart'>
                <p>add to Cart</p>
            </button>


        </div>
    );
};

export default Product;