import React, { useState } from "react";

export default function Funcion6() {
  const initNote = { name: "", desp: "" };
  const [notas, setNotas] = useState([]);
  const [f6, setF6] = useState(initNote);

  const handleChange = (e) => {
    setF6({
      ...f6,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    setNotas(notas.concat(f6))
    setF6(initNote);
  };
  return (
    <>
      <h1 className="text-3xl font-bold w-11/12 mx-auto">Función 6</h1>
      <div className="w-11/12 flex mb-6 h-full flex-col space-y-4 sm:space-x-8 mx-auto">
        <div className="w-11/12  bg-gray-200 flex flex-col space-y-8 p-4 rounded-xl mx-auto">
          <h2 className="font-bold w-full my-auto text-2xl text-gray-800/70">
            Crear Nota . . .
          </h2>
          <div className="flex flex-col sm:flex-row">
            <h2 className="font-semibold w-full text-center sm:text-right my-auto text-xl text-gray-800/60 pr-2 sm:w-3/12">
              Nombre:
            </h2>{" "}
            <input
              name="name"
              type="text"
              value={f6.name}
              onChange={handleChange}
              placeholder="Nombre de la nota"
              className="input input-bordered sm:w-9/12 w-full"
            />
          </div>
          <div className="flex flex-col sm:flex-row">
            <h2 className="font-semibold  text-center sm:text-right p-2 text-xl text-gray-800/60 pr-2 w-full sm:w-3/12">
              Descripción:
            </h2>{" "}
            <textarea
              name="desp"
              type="text"
              value={f6.desp}
              onChange={handleChange}
              placeholder="Describe la nota"
              className="textarea h-32 textarea-bordered sm:w-9/12 w-full"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="btn" onClick={submit}>
              Agregar
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">Notas: </h1>
        <div
          className="w-11/12 mx-auto flex flex-row overflow-auto flex-wrap h-96 rounded-xl bg-gray-200/60 items-center justify-center"
          id="f6card"
        >
          {notas.legth === 0
            ? ""
            : notas.map((item, index) => (
                <div key={index} className="card bg-slate-300 mx-4 mt-4 mb-6 w-[300px] p-4 shadow-xl flex flex-col">
                  <h1 className="text-2xl uppercase">{item.name}</h1>
                  <p className="w-11/12 mx-auto">{item.desp}</p>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
