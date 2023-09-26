import React from 'react';
import './Product.css'
const Product = ({products,addToCard}) => {
    // console.log('add to cart ', props.addToCard);
    const { name, img, price, seller, ratings } = products;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p> price {price}</p>
                <p><small>Seller {seller}</small></p>
                <p><small>Ratings {ratings}</small></p>
            </div>
            <button className='btnCart' onClick={() => addToCard(products)}>
                <p>add to Cart</p>
            </button>


        </div>
    );
};

export default Product;