// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Assuming you have a CSS file for styling

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() && password) {
            onLogin(username); // Call the onLogin function with the username
        } else {
            setError('Both fields are required');
        }
    };

    const resetError = () => setError(''); // Clear error on input change

    return (
        <div className="form-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="login-form">
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
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            resetError();
                        }}
                        required
                    />
                </div>
                <button type="submit" disabled={!username || !password}>
                    Login
                </button>
            </form>
            <p className="form-footer">
                Don't have an account? <Link to="/signup">Signup</Link>
            </p>
        </div>
    );
};

export default Login;
