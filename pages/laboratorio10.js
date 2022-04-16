import Link from "next/link";
import React from "react";
import Contact from "../components/Contact";
import Layaout from "../components/Layaout";

export default function Laboratorio10() {
  const num = Math.floor(Math.random() * 100);
  return (
    <Layaout>
      <h1 className="title">Pagina de error 404</h1>
      <div className="mt-6 mb-12 w-full text-center">
        <Link href={`/${num}`}>
          <button className="btn">
            Pagina error 404 generada aletoriamente
          </button>
        </Link>
      </div>
      <div>
        <Contact />
      </div>
    </Layaout>
  );
}
