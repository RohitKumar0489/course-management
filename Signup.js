// src/components/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Assuming you have a CSS file for styling

const Signup = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() && password.length >= 6) {
            onSignup(username); // Call the onSignup function with the username
        } else {
            setError('Username and password must be valid. Password must be at least 6 characters.');
        }
    };

    const resetError = () => setError(''); // Clear error on input change

    return (
        <div className="form-container">
            <h2>Signup</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            resetError();
                        }}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password (6+ characters)"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            resetError();
                        }}
                        required
                    />
                </div>
                <button type="submit" disabled={!username || password.length < 6}>
                    Signup
                </button>
            </form>
            <p className="form-footer">
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Signup;
