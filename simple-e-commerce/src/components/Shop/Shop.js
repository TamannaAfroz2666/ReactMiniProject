import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';

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
        addToDb(product.id)
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
                <Cart carts ={cart}></Cart>

            </div>
           
        </div>
    );
};

export default Shop;