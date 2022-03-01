import React, { useEffect, useState } from "react";

export default function Funcion4() {
  const [f4, setF4] = useState([]);

  useEffect(() => {
    funcion4();
  }, []);

  function ArrayAvg(myArray) {
    var i = 0,
      summ = 0,
      ArrayLen = myArray.length;
    while (i < ArrayLen) {
      summ = summ + myArray[i++];
    }
    return summ / ArrayLen;
  }

  const funcion4 = () => {
    let aux = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    for (let i = 0; i < aux.length; i++) {
      for (let j = 0; j < aux[i].length; j++) {
        aux[i][j] = Math.floor(Math.random() * 100);
      }
    }
    setF4(aux);
  };

  return (
    <>
      <div className="flex flex-row w-11/12 place-content-between mx-auto">
        <h1 className="text-3xl font-bold">Función 4</h1>
        <button onClick={funcion4} className="btn ml-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="17px"
            height="17px"
            viewBox="0 -0.5 17 17"
            version="1.1"
            className="si-glyph si-glyph-arrow-backward"
          >
            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <path
                d="M1.307,5.988 L6.616,1.343 C7.027,0.933 7.507,0.864 7.918,1.275 L7.918,4.407 C8.014,4.406 8.098,4.406 8.147,4.406 C13.163,4.406 16.885,7.969 16.885,12.816 C16.885,14.504 16.111,13.889 15.788,13.3 C14.266,10.52 11.591,8.623 8.107,8.623 C8.066,8.623 7.996,8.624 7.917,8.624 L7.917,11.689 C7.506,12.099 6.976,12.05 6.615,11.757 L1.306,7.474 C0.897,7.064 0.897,6.399 1.307,5.988 L1.307,5.988 Z"
                fill="#FFFFFF"
              />
            </g>
          </svg>
        </button>
      </div>
      <div className="flex flex-row w-full">
        <div className=" w-10/12">
          <h3 className="font-semibold mx-auto my-auto text-xl w-10/12">
            Matriz aleatoria:
          </h3>
        </div>
        <div className=" w-2/12 ">
          <h3 className="font-semibold mx-auto my-auto text-xl w-10/12">X̅:</h3>
        </div>
      </div>
      <div className="w-11/12 flex mb-12 h-full flex-row items-start justify-start mx-auto">
        <div className=" flex w-10/12 flex-col space-y-4 mx-auto">
          {f4.map((i,index1) => (
            <div
              key={`${index1}`}
              className="flex w-11/12 mx-auto flex-row space-x-4"
            >
              {i.map((j,index2) => (
                <kbd key={`${index2}`} className="kbd">
                  {j}
                </kbd>
              ))}
            </div>
          ))}
        </div>
        <div className=" flex w-2/12 mx-auto flex-col space-y-4">
          {f4.map((i,index) => (
            <kbd key={`${index}`} className="kbd">
              {ArrayAvg(i)}
            </kbd>
          ))}
        </div>
      </div>
    </>
  );
}
