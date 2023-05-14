import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
// import PostAPI from './PostAPI';

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);
    return (
        <div>
            <h1>Home Page</h1>
            <h3>Navigation on click</h3>
            <button className='btn btn-success me-2'  onClick={() => navigate('/about')}>Go to About page</button>
            <button className='btn btn-info' onClick={() => navigate('/filter')}>Go to About page</button>
            <h2>Post API</h2>
            {/* <PostAPI /> */}
        </div>
    )
}

export default Home;
