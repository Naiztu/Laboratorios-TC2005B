import React from "react";
import Link from "next/link";

export default function LinkLaboratorios({num}) {
  return (
    <Link href={`/laboratorio${num}`}>
      <a className={`bg-gray-50 my-10 opacity-90 flex flex-col justify-center relative overflow-hidden mx-8 lg:mx-20 transition ease-in-out hover:-translate-y-1 active:bg-primary active:scale-95 hover:scale-105  hover:opacity-100 shadow-sm ${num%2===0?"hover:-rotate-6":"hover:rotate-6"}`}>
        <div className="relative px-6 pt-10 pb-8 bg-neutral shadow-xl sm:max-w-lg sm:mx-auto rounded-xl sm:px-10 w-[300px]">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-400/50 ">
              <h1 className=" text-center text-8xl font-extrabold text-white py-4">{num}</h1>
              <div className="py-8 text-base text-center flex justify-between">
                <p className="text-xl w-full font-serif text-white opacity-75 link link-hover">
                  Ir al laboratorio {num}
                </p>
              </div>
              <div className="divide-y divide-gray-400/50" />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
