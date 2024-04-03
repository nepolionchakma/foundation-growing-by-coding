import React, { useContext, useState } from 'react';
import MyContex from './Context/myContex';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(MyContex)
    const handleSunmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <div>
            <form onSubmit={handleSunmit}>
                <input onChange={(e) => setUsername(e.target.value)} type="text" />
                <input onChange={(e) => setPassword(e.target.value)} type="text" />
                <button onClick={handleSunmit} type='submit'>login</button>
            </form>
        </div>
    );
};

export default Login;