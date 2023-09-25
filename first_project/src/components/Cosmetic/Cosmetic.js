import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {id, name, balance} = props.CosmeticData;

    // event handler work 
    const addCard = (id) =>{
        console.log('hello shopping');
        console.log('product id is', id);

    } 

    const addToCard = () =>{
    addCard(id)
    }
    return (
        <div className='product'>

            <h2>product name:{name}</h2>
            <h2>product price: {balance}</h2>
            <h2>product id : {id}</h2>
            <button type='button' onClick={addToCard}>Add to cart</button>
            <button type='button' onClick={()=>addCard(id)}>Add to cart sortcut</button>
        </div>
    );
};

export default Cosmetic;