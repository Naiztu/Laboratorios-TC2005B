import Link from "next/link";
import React from "react";
import Contact from "../components/contact";
import Layaout from "../components/Layaout";

export default function Laboratorio10() {
  const num = Math.floor(Math.random() * 100);
  return (
    <Layaout>
      <div className="pt-16">
        <h1 className="title">Pagina de error 404</h1>
        <div className="w-full text-center mt-6 mb-12">
          <Link href={`/${num}`}>
            <button className="btn" >
              Pagina error 404 generada aletoriamente
            </button>
          </Link>
        </div>
        <div>
          <Contact/>
        </div>
      </div>
    </Layaout>
  );
}
