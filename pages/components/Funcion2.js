import React, { useEffect, useState } from "react";

export default function Funcion2() {
  const [f2, setF2] = useState({
    num1: 0,
    num2: 0,
    sum: 0,
  });
  useEffect(() => {
    funcion2();
  }, []);

  const funcion2 = () => {
    let n1 = Math.floor(Math.random() * 150),
      n2 = Math.floor(Math.random() * 150),
      r = n1 + n2;
    setF2({
      num1: n1,
      num2: n2,
      sum: r,
    });
  };
  return (
    <>
      <h1 className="text-3xl font-bold pb-6 ml-6">Función 2</h1>
      <div className="w-full flex items-center justify-center">
        <kbd className="kbd">{f2.num1}</kbd>
        <span className="mx-6 text-xl font-bold">+</span>
        <kbd className="kbd">{f2.num2}</kbd>
        <span className="mx-6 text-xl font-bold">=</span>
        <kbd className="kbd">{f2.sum}</kbd>

        <button onClick={funcion2} className="btn ml-6">
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
      <div className="alert shadow-lg alert-success w-10/12 mx-auto ">
        <div className="mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{`El resultado de ${f2.num1} más ${f2.num2}, si es: ${f2.sum}`}</span>
        </div>
      </div>
    </>
  );
}
