import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    // add data load 
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>{
            // console.log('data is', data);
            setProducts(data);
        })

    },[])
    return (
        <div className='shop-container'>
            <div className="products">
            <div className="product-container">
               {
                products.map((product) =>{
                    return(
                        <Product 
                        products = {product} key={product.id}
                        >

                        </Product>
                    )
                }

                )
               }
            </div>

            </div>
            
            <div className="card-container">
                <h2>hgfdd</h2>

            </div>
           
        </div>
    );
};

export default Shop;