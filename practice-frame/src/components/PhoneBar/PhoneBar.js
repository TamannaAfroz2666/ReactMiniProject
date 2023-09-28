import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);

    // data load 

    useEffect(() =>{
        axios.get(`https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`).then(data =>{
            console.log('data is', data);
        })

    },[])
    return (
        <div>
            <h1>gff</h1>
            
        </div>
    );
};

export default PhoneBar;