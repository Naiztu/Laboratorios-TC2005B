import React from "react";
import cookie from "js-cookie";

export default function LogoutCokies({setGalleta }) {
  const user = cookie.get("user")
    return (
    <>
      <div
        className="hero h-screen w-full"
        style={{
          backgroundImage:
            'linear-gradient(rgba(5,7,12,.75),rgba(5,7,12,.75)),url("https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg")',
        }}
      >
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hola {cookie.get("user")? user: "tu"}!</h1>
            <p className="mb-5">
              Puedes checar en las opciones de desarrollador, las cookies
              creadas por la pagina.
            </p>
            <button
              onClick={(e) => {
                cookie.remove("login");
                setGalleta(cookie.get("login"));
                cookie.remove("user")
              }}
              className="btn"
            >
              Salir
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
