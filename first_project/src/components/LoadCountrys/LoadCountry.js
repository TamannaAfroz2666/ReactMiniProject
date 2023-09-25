import React from 'react';
import './LoadCountry.css'

const LoadCountry = (props) => {
    console.log('the countrues data is:', props.CountryName);
    // country object has distruct
    const {flag, region, population,name} = props.CountryName;
    return (
        <div className='main'>
            <h2>Country Name is: {name.common}</h2>
            <h4>Country flag is: {flag}</h4>
            <h4>Country Region is: {region}</h4>
            <h4>Country Population is: {population}</h4>
        </div>
    );
};

export default LoadCountry;