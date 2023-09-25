import React from 'react';
import './Cosmetic.css'
import { addToDb, removeFromDb } from '../../Utilities/addtodb';




const Cosmetic = (props) => {
    const {id, name, balance} = props.CosmeticData;

    // event handler work 
    const addCard = (id) =>{
        console.log('product id is', id);
   
        addToDb(id)
        

    } 
    // const addToCard = () =>{
    // addCard(id)
    // }

    // for remove data
    const removeFromCart =(id) =>{
        console.log('removing', id);
        removeFromDb(id);

    } 


    return (
        <div className='product'>

            <h2>product name:{name}</h2>
            <h2>product price: {balance}</h2>
            <h2>product id : {id}</h2>
            {/* <button type='button' onClick={addToCard}>Add to cart sortcut</button> */}
            <button type='button' onClick={()=>addCard(id)}>Add to cart </button>
            <button onClick={()=>removeFromCart(id) }>Remove</button>
        </div>
    );
};

export default Cosmetic;