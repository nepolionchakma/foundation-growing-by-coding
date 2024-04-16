import React, { useState } from 'react';
import { useAuth } from './authContex/authContex';

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { logIn } = useAuth()
    const handleLogin = async (e) => {
        e.preventDefault();
        logIn(email, password);
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default LogIn;