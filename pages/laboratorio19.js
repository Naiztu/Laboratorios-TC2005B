import React, { useState } from 'react'
import CreateUser from '../components/CreateUser'
import HomePage from '../components/HomePage'
import Layaout from '../components/Layaout'
import LoginBD from '../components/LoginBD'

export default function Laboratorio19() {
    const [user, setUser] = useState(null)
    return (
        <Layaout>
            {user === null ? <LoginBD setData={setUser} /> : user.id_rol === 1 ? <HomePage user={{ user, setUser }} /> : <CreateUser />}
        </Layaout>
    )
}
