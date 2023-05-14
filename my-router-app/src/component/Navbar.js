import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* <Link >Gallery</Link> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className='nav-link' to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to="contactus">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to="/">Navigate</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to="/filter">Filter</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
