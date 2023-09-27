import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCard } from '../../utilities/fakedb';

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

    },[]);

    useEffect(() =>{
        const storedCard = getStoredCard();
        console.log('storedCard', storedCard);
        const saveCart = [];
        // use for in coz object er moddhey loop used 
        for(const id in storedCard){
            // console.log('id is', id);
            const addedProduct = products.find(product=> product.id === id );
           
            if(addedProduct){
                // quantity ber kora 
                const quantity = storedCard[id];
                addedProduct.quantity = quantity;
                console.log('addedProduct', addedProduct);
                // add new array to store card info
                saveCart.push(addedProduct) ;

            }         
         
        }
        setCart(saveCart);

    },[products]);

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