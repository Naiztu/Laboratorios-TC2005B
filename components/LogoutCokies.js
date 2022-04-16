import React from "react";
import cookie from "js-cookie";
import { useState, useEffect } from "react";

export default function LogoutCokies({ setGalleta }) {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    setUser(cookie.get("user"));
  }, []);

  return (
    <>
      <div
        className=" flex h-screen w-full items-center justify-center bg-cover bg-no-repeat text-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(5,7,12,.75),rgba(5,7,12,.75)),url("./img/fondo.jpg")',
        }}
      >
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl font-bold">
            Hola {cookie.get("user") ? user : "tu"}!
          </h1>
          <p className="mb-5">
            Puedes checar en las opciones de desarrollador, las cookies creadas
            por la pagina.
          </p>
          <button
            onClick={(e) => {
              cookie.remove("login");
              setGalleta(cookie.get("login"));
              cookie.remove("user");
            }}
            className="btn"
          >
            Salir
          </button>
        </div>
      </div>
    </>
  );
}
