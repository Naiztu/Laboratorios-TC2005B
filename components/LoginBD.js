import Axios from 'axios';
import React, { useState } from 'react';
import LoginForm from './loginForm';

export default function LoginBD({ setData }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const form = async (e) => {
        try {
            const res = await Axios.post("/api/login", { username, password })
            console.log(res)
            setData(res.data)
        } catch (error) {
            console.log({ error })
        }
    }

    const google = (e) => {
        console.log("2")
    }
    return (
        <LoginForm google={google} form={form} user={{ username, setUsername }} pass={{ password, setPassword }} />
    );
}
