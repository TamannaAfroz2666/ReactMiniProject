import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div>

            <h1>This is about page</h1>
            <h2>gdfjghdghdfhg</h2>

            {/* <Link to="/about">
                <button>Click</button>
            </Link> */}

            <Link to ="/product">
            <button>Click me</button>
            </Link>

        </div>
    );
};

export default About;