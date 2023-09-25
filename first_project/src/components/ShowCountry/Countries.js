import React, { useEffect, useState } from 'react';
import './Countries.css'
import LoadCountry from '../LoadCountrys/LoadCountry';

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res =>res.json())
        .then(data =>{
            console.log('the country data is :', data);
            setCountries(data);

        })

    },[])
    return (
        <div>
            <h2>show the country list Lenght {countries.length}</h2>

            {
                countries.map((country) =>{
                    return(
                        <LoadCountry
                         CountryName ={country}>

                         </LoadCountry>
                    )
                })
            }
        </div>
    );
};

export default Countries;