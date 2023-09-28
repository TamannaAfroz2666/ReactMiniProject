import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
            setPhones(phoneData);

            
        })

    },[])
    return (
        <div>
             <BarChart width={500} height={300} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="price" />
                <YAxis />
                <Tooltip />
                <Legend />
               
        </BarChart>
            
        </div>
    );
};

export default PhoneBar;