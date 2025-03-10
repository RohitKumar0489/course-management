import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import CourseManagement from './components/CourseManagement';

function App() {
    const [user, setUser ] = useState(null);

    const handleSignup = (username) => {
        setUser (username);
    };

    const handleLogin = (username) => {
        setUser (username);
    };

    const handleLogout = () => {
        setUser (null);
    };

    return (
        <Router>
            <div className="App">
                <nav>
                    {!user ? (
                        <>
                            <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
                        </>
                    ) : (
                        <>
                            <span>Welcome, {user}!</span>
                            <button onClick={handleLogout} style={{ marginLeft: '10px' }}>
                                Logout
                            </button>
                        </>
                    )}
                </nav>

                <Routes>
                    <Route path="/signup" element={!user ? <Signup onSignup={handleSignup} /> : <Navigate to="/" />} />
                    <Route path="/login" element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />
                    <Route path="/" element={user ? <CourseManagement /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;