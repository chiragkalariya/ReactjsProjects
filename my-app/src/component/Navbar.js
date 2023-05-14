import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <>
            <ul className='navbar-nav'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </>
    )
}
export default Navbar;
