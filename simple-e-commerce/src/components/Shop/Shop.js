import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // add data load 
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
        })

    },[])

    // use button event handler 
    const addToCard = (product) => {
        console.log('product', product);

        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products">
            <div className="product-container">
               {
                products.map((product) =>{
                    return(
                        <Product 
                        products = {product} key={product.id}
                        addToCard = {addToCard}
                        >

                        </Product>
                    )
                }

                )
               }
            </div>

            </div>
            
            <div className="card-container">
                <h2>Order Summery</h2>
                <h2>Selected items: {cart.length}</h2>

            </div>
           
        </div>
    );
};

export default Shop;