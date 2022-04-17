import React from 'react'

export default function HomePage({ user: { user, setUser } }) {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/img/hed.gif" className=" w-11/12 mx-auto max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Bienvenido</h1>
                    <p className="py-6 text-neutral">Solo los que estan registrados en la base de datos pueden entrar a esta pagina.<br /> Como tu: {user.username}</p>
                    <button className="btn " onClick={() => setUser(null)}>Salir</button>
                </div>
            </div>
        </div>
    )
}
