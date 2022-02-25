import React, { useState } from "react";
import Alert from "../Alert";

export default function Login({ access, setAccess }) {
  const initUser = { user: "", pass: "" };
  const [l6, setL6] = useState(initUser);
  const [login, setLogin] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [register, setRegister] = useState(false);

  const handleChange = (e) => {
    setL6({
      ...l6,
      [e.target.name]: e.target.value,
    });
  };

  const addUser = () => {
    setUsers(users.concat(l6));
    setL6(initUser);
    setLogin(true);
    setRegister(true);
    setTimeout(() => {
      setRegister(false);
    }, 3000);
  };
  const loginUser = () => {
    let ban = true;
    for (let i = 0; i < users.length; i++) {
      if (users[i].user === l6.user && users[i].pass === l6.pass) {
        setL6(initUser);
        setAccess(true);
        ban = false;
        break;
      }
    }
    if (ban) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  let alerts = [
    {
        id:"1",
      bal: error,
      type: "error",
      text: "Incorrecto!",
    },
    {
        id:"2",
      bal: register,
      type: "success",
      text: "Usuario agregado!",
    },
  ];
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">
              {login ? "Entrar de nuevo! " : "Registrate ya!"}
            </h1>
            <p className="py-6 w-10/12 mx-auto text-center">
              ¿Quieres hacerte millonario con tres sencillas aplicaciones? No
              esperes mas y inscribete a una de las empresas top del momento!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 overflow-visible">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Usuario</span>
                </label>
                <input
                  type="text"
                  placeholder="Usuario"
                  name="user"
                  className="input input-bordered"
                  value={l6.user}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="Constraseña"
                  className="input input-bordered"
                  name="pass"
                  value={l6.pass}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn" onClick={login ? loginUser : addUser}>
                  {login ? "Entrar" : "Registrar"}
                </button>
              </div>
              <button
                className="link text-right mr-4 text-sm"
                onClick={(e) => {
                  setLogin(false);
                }}
              >
                Registrar usuario
              </button>
            </div>
            {alerts.map((item) => (
              <Alert key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
