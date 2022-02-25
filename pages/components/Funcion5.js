import React, { useState } from "react";

export default function Funcion5() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1 className="text-3xl font-bold w-11/12 mx-auto">Función 5</h1>
      <div className="w-11/12 flex mb-6 h-full flex-col sm:flex-row space-y-4 sm:space-x-8 justify-center items-center mx-auto flex-wrap">
        <label className="font-semibold text-center my-auto text-xl w-full sm:w-1/2">
          Escribe un numero:
        </label>{" "}
        <input
          id="inputf5"
          type="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          value={number}
          className="input input-bordered input-info max-w-xs border-4 my-auto text-center w-full sm:w-1/2"
        />
        <kbd className="kbd text-2xl w-full sm:w-1/2">
          {Number(number.toString().split("").reverse().join(""))}
        </kbd>
      </div>
    </>
  );
}
