import React, { useEffect, useState } from "react";

export default function Funcion3() {
  const [inputf3, setInputf3] = useState(0);
  const [f3, setF3] = useState({
    zeros: 0,
    positivos: 0,
    negativos: 0,
    lista: [],
  });

  useEffect(() => {
    let num0 = 0,
      numPos = 0,
      numNeg = 0;
    f3.lista.map((item) => {
      item == 0 && num0++;
      item > 0 && numPos++;
      item < 0 && numNeg++;
    });

    setF3({
      ...f3,
      zeros: num0,
      positivos: numPos,
      negativos: numNeg,
    });
  }, [f3.lista])
  

  const updateF3 = () => {
    
  };

  const funcion3 = () => {
    setF3({
      ...f3,
      lista: f3.lista.concat([inputf3]),
    });

    updateF3
    setInputf3(0);
  };
  return (
    <>
      <h1 className="ml-6 text-3xl font-bold">Función 3</h1>
      <div className="w-11/12 flex mb-6 h-full flex-col sm:flex-row space-y-4 sm:space-x-8 justify-center items-center mx-auto">
        <label className="font-semibold w-full text-center my-auto text-xl">
          Escribe un numero:
        </label>{" "}
        <input
          id="inputf3"
          type="number"
          onChange={(e) => setInputf3(e.target.value)}
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
      <div className="flex flex-wrap  w-11/12 items-start justify-center ">
        <div className="w-full sm:w-8/12">
          <h3 className="font-semibold w-10/12 mx-auto my-auto text-xl">
            Lista:
          </h3>
          <div
            className="flex w-full flex-wrap justify-center p-4"
            id="f3lista"
          >
            {f3.lista.length === 0
              ? "No hay ningun dato en la lista :("
              : f3.lista.map((i,index) => {
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
              <h3>Negativos: </h3>
              <p id="f3neg">{f3.negativos}</p>
            </div>
            <div className="flex flex-row space-x-8">
              <h3>Ceros: </h3>
              <p id="f3zer">{f3.zeros}</p>
            </div>
            <div className="flex flex-row space-x-8">
              <h3>Positivos: </h3>
              <p id="f3pos">{f3.positivos}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
