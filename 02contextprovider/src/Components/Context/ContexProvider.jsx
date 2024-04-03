import React, { useState } from 'react';
import MyContex from './myContex';

const ContexProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    return (
        <MyContex.Provider value={{ user, setUser }}>
            {children}
        </MyContex.Provider>
    );
};

export default ContexProvider;