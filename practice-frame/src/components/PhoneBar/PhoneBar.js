import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);

    // data load 

    useEffect(() =>{
        axios.get(`https://openapi.programming-hero.com/api/phones?search=iphone`).then(res =>{
            // console.log('data is', res.data.data);
            const PhoneLoaded = res.data.data;
            // console.log('data loaded', PhoneLoaded);
            const phoneData = PhoneLoaded.map(phone =>{
                const partsDivided = phone.slug.split('-');
                const pricePhone = parseInt(partsDivided[1]);
                // console.log('pricePhone',pricePhone);
                const singlePhone ={
                    name : phone.phone_name,
                    price : pricePhone
                }
                return singlePhone;
            })
            console.log('data processing here ', phoneData);

            
        })

    },[])
    return (
        <div>
            <h1>gff</h1>
            
        </div>
    );
};

export default PhoneBar;