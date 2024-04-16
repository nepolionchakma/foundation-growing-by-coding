import React, { useState } from 'react';
import { useAuth } from './authContex/authContex';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { register } = useAuth()
    const handleRegister = (e) => {
        e.preventDefault()
        register(email, password)
    }
    console.log(email, password)
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign Up</button>
            </form>
            <br />
        </div>
    );
};

export default Register;