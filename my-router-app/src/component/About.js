import React from 'react';
import { Link } from 'react-router-dom';
import StoreDatainLS from './StoreDatainLS';

const About = () => {
    
    return (
        <div>
            <h1>About Page</h1>
            <h3>Show Dynamic Data using param</h3>
            <ul className='nav d-flex justify-content-center'>
                <li className='nav-item'>
                    <Link className='nav-link' to="/user/rahul" state={{name: 'rahul patel', age: 25}}>rahul</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/user/deep">deep</Link>
                </li>
            </ul>
            <StoreDatainLS />
        </div>
    )
}

export default About
