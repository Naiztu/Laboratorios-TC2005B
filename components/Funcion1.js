import React, { useState } from "react";

function Funcion1() {
  const [table, setTable] = useState([1]);

  const funcion1 = (e) => {
    let arr = [];
    for (let i = 1; i <= e.target.value; i++) {
      arr.push(i);
    }
    setTable(arr);
  };
  return (
    <>
      <h1 className="text-3xl font-bold pb-6 ml-6">Función 1</h1>
      <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
        <div className="w-full flex mb-6 h-full flex-col sm:flex-row space-y-4 sm:space-x-8 justify-center items-center mx-auto">
          <label className="font-semibold w-full text-center my-auto text-xl">
            Escribe un numero:
          </label>{" "}
          <input
            type="number"
            value={table.length}
            onChange={funcion1}
            className="input input-bordered input-info w-full max-w-xs border-4 my-auto text-center"
            min={0}
            max={100}
            required
          />
        </div>
        <div className="mt-10 overflow-x-auto w-full mx-auto block shadow-sm shadow-black rounded-xl">
          <table className="table w-full">
            <thead>
              <tr id="thead">
                <th></th>
                {table.map((i) => (
                  <th key={i}>{i}</th>
                ))}
              </tr>
            </thead>
            <tbody id="fun1body">
              <tr>
                <th className="bg-white shadow-sm shadow-white">
                  n<sup>2</sup>
                </th>
                {table.map((i) => (
                  <td key={i}>{i ** 2}</td>
                ))}
              </tr>
              <tr>
                <th className="bg-white shadow-sm shadow-white">
                  n<sup>3</sup>
                </th>
                {table.map((i) => (
                  <td key={i}>{i ** 3}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Funcion1;
