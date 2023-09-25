import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {id, name, balance} = props.CosmeticData;
    return (
        <div className='product'>

            <h2>product name:{name}</h2>
            <h2>product price: {balance}</h2>
            <h2>product id : {id}</h2>
            <button type='button'>Add to cart</button>
        </div>
    );
};

export default Cosmetic;