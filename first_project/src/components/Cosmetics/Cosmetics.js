import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch(`data.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCosmetics(data)
        })

    },[])
    return (
        <div>
            <h1>Our product list below here</h1>
            {
                cosmetics.map((cosmetic) =>{
                    return(
                        <Cosmetic
                         CosmeticData ={cosmetic}
                         key ={cosmetic.id}
                        ></Cosmetic>
                    )
                })
            }
            
        </div>
    );
};

export default Cosmetics;