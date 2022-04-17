import React from 'react'

export default function HomePage({ user: { user, setUser } }) {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="/img/hed.gif" class=" w-11/12 mx-auto max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Bienvenido</h1>
                    <p class="py-6 text-neutral">Solo los que estan registrados en la base de datos pueden entrar a esta pagina.<br /> Como tu: {user.username}</p>
                    <button class="btn " onClick={() => setUser(null)}>Salir</button>
                </div>
            </div>
        </div>
    )
}
