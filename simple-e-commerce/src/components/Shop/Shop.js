import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    // add data load 
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>{
            console.log('data is', data);
            setProducts(data);
        })

    },[])
    return (
        <div className='shop-container'>
            <div className="shopping-container">
                <h1>ghg</h1>
            </div>
            <div className="card-container">
                <h2>hgfdd</h2>

            </div>
           
        </div>
    );
};

export default Shop;