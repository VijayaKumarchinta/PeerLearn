import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/projects/upload">Upload Project</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/review">Review</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
