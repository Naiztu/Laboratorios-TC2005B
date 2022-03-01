import React, { useEffect, useState } from "react";

export default function Promedio() {
  const [inputf3, setInputf3] = useState(0);
  const [f3, setF3] = useState([]);

  const funcion3 = () => {
    setF3(f3.concat([inputf3]));
    setInputf3(0);
  };

  function ArrayAvg(myArray) {
    let suma = 0;

    for (let x = 0; x < myArray.length; x++) {
      suma += myArray[x];
    }
    return myArray != 0 ? suma / myArray.length : 0;
  }
  return (
    <>
      <h1 className="title">Promedio</h1>
      <div className="w-11/12 flex h-full flex-col sm:flex-row space-y-4 sm:space-x-8 justify-center items-center mx-auto">
        <label className="font-semibold w-full text-center my-auto text-xl">
          Escribe un numero:
        </label>{" "}
        <input
          id="inputf3"
          type="number"
          onChange={(e) => setInputf3(parseInt(e.target.value))}
          value={inputf3}
          className="input input-bordered input-info w-full max-w-xs border-4 my-auto text-center"
          min="-100"
          max="100"
          required
        />
        <button onClick={funcion3} className="btn my-auto font-bold">
          Agregar
        </button>
      </div>
      <div className="flex flex-wrap  w-11/12 items-start justify-center my-8">
        <div className="w-full sm:w-8/12">
          <h3 className="font-semibold w-10/12 mx-auto my-auto text-xl">
            Lista:
          </h3>
          <div
            className="flex w-full flex-wrap justify-center p-4"
            id="f3lista"
          >
            {f3.length === 0
              ? "No hay ningun dato en la lista :("
              : f3.map((i, index) => {
                  return (
                    <kbd key={index} className="kbd mx-2 mb-2">
                      {i}
                    </kbd>
                  );
                })}
          </div>
        </div>

        <div className="w-full sm:w-4/12">
          <h3 className="font-semibold mx-auto my-auto text-xl w-10/12">
            Analisis:
          </h3>
          <div className="flex flex-col w-10/12 mx-auto p-4">
            <div className="flex flex-row space-x-8">
              <h3>Promedio: </h3>
              <p>{new Intl.NumberFormat("es-MX").format(ArrayAvg(f3))}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
