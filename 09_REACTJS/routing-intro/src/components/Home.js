import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <h2>Homepage </h2>
            <p>
                Please Check Our <Link to="/faq">FAQ</Link>
            </p>
            <p>
                <Link to="/characters/luke"> Luke Skywalker</Link>
            </p>
            <p>
                <Link to="/characters/r2d2"> R2D2 </Link>
            </p>
        </div>
    )
}

export default Home