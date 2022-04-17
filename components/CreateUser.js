import Axios from "axios";
import React, { useState, useEffect } from "react";

export default function CreateUser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [id_rol, setId_rol] = useState(1);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await Axios.get("/api/createUser");
                setUsers(data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <div className="grid min-h-screen w-full grid-cols-1 sm:grid-cols-2">
            <div className="place-self-center">
                <h1 className="title">Agregar Usuario</h1>
                <div className="mt-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                        Usuario
                    </label>
                    <input
                        className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 py-2 px-4 text-gray-700 focus:outline-none"
                        type="text"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <label className="mb-2 block text-sm font-bold text-gray-700">
                            Contraseña
                        </label>
                    </div>
                    <input
                        className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 py-2 px-4 text-gray-700 focus:outline-none"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="mt-4 flex items-center">
                    <label className="mb-2 mr-7 inline text-sm font-bold text-gray-700">
                        Admin
                    </label>
                    <input
                        type="checkbox"
                        className="toggle"
                        onClick={(e) => {
                            if (e.target.checked) {
                                setId_rol(2);
                            } else {
                                setId_rol(1);
                            }
                        }}
                    />
                </div>
                <button className="btn mx-auto mt-4 block" disabled>
                    Agregar
                </button>
            </div>
            <div className="place-self-center">
                <h1 className="title">Lista de Usuarios</h1>
                <div className=" max-h-[400px]">
                    <table className=" table-auto">
                        <thead>
                            <tr>
                                <th className="py-2 px-6 uppercase">Username</th>
                                <th className="py-2 px-6 uppercase">Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-6">{item.username}</td>
                                    <td className="py-2 px-6">
                                        {item.id_rol === 1 ? "No" : "Yes"}
                                    </td>{" "}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
