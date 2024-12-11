import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import '../styles/Login.css';

function Login() {
    const navigate = useNavigate(); // Hook for navigation
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [message, setMessage] = useState(''); // Store success/error message

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Displaying a success message
        setMessage('Login successful! Redirecting to the upload page...');

        // Delay to show the success message before redirecting
        setTimeout(() => {
            navigate('/projects/upload'); // Redirect to upload page
        }, 2000); // Redirect after 2 seconds
    };

    return (
        <div className="login">
            <h2>Login</h2>
            {message && <p className="message">{message}</p>} {/* Display message */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
