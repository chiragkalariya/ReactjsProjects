import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ContactUs = () => {
    return (
        <div>
            <h1>Contact Us Page</h1>
            <h2>Nested Routing</h2>
            <ul className='nav justify-content-center'>
                <Link className='nav-link' to="company">Company</Link>
                <Link className='nav-link' to="chenal">Chanel</Link>
                <Link className='nav-link' to="other">Other</Link>
            </ul>
            <Outlet />
        </div>
    )
}

export default ContactUs
