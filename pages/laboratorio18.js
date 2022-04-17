import React, { useState } from 'react'
import HomePage from '../components/HomePage'
import Layaout from '../components/Layaout'
import LoginBD from '../components/LoginBD'

export default function Laboratorio18() {
    const [user, setUser] = useState(null)
    return (
        <Layaout>
            {user === null ? <LoginBD setData={setUser} /> : <HomePage user={{ user, setUser }} />}
        </Layaout>
    )
}
