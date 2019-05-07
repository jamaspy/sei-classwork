import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const FAQ = () => {
    return (
        <div>
            <h2>FAQ Page </h2>
            <p>
               Go Back <Link to="/">HOME</Link>
            </p>
        </div>
    )
}
export default FAQ;