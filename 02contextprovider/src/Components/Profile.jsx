import React, { useContext } from 'react'
import MyContex from './Context/myContex'

function Profile() {
    const { user } = useContext(MyContex);

    if (!user) return <div>Please LogIn</div>
    return <div>Welcome mr {user.username}</div>
}

export default Profile