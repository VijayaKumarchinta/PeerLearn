// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="back-to-home">
                Go back to Home
            </Link>
        </div>
    );
}

export default NotFound;
