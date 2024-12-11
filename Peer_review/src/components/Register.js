import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Register.css';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: '',
    });

    const [isRegistered, setIsRegistered] = useState(false); // Track successful registration
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would send this data to the backend for registration
        console.log(formData);

        // Simulate registration success by setting isRegistered to true
        setIsRegistered(true);

        // Reset the form fields after submission
        setFormData({
            username: '',
            password: '',
            role: '',
        });

        // Redirect to the login page after 2 seconds (simulate success delay)
        setTimeout(() => {
            navigate('/login'); // Redirect to the login page
        }, 2000);
    };

    return (
        <div className="register">
            <h2>Register</h2>

            {/* Conditionally show the success message */}
            {isRegistered && <p className="success-message">Registration Successful! Redirecting to login...</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Role (student/admin)"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
