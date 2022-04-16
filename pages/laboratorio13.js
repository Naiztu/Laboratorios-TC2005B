import React from "react";
import Layaout from "../components/Layaout";

export default function Laboratorio13() {
  return (
    <Layaout>
      <div className="mx-auto w-11/12">
        <h1 className="title"> Modelo Vista Controlador (MVC)</h1>
        <div>
          <h2 className="subtitle"> Ventajas:</h2>
          <ul className="mx-auto w-10/12 text-justify">
            <li className="list-disc">
              Separación clara de dónde tiene que ir cada tipo de lógica,
              facilitando el mantenimiento y la escalabilidad de nuestra
              aplicación.
            </li>
            <li className="list-disc">
              Sencillez para crear distintas representaciones de los mismos
              datos.{" "}
            </li>{" "}
            <li className="list-disc">
              Facilidad para la realización de pruebas unitarias de los
              componentes, así como de aplicar desarrollo guiado por pruebas
              (Test Driven Development o TDD).
            </li>
            <li className="list-disc"> Reutilización de los componentes. </li>
            <li className="list-disc">
              No existe ciclo de vida de las páginas. Con menos peso, menos
              complejidad.
            </li>
            <li className="list-disc">
              Motor de Routing asociando una URL concreta con su correspondiente
              controlador, permitiendo URL semánticas.
            </li>
            <li className="list-disc">
              {" "}
              Las URL semánticas se indexan mejor en los buscadores, siendo más
              adecuadas para el posicionamiento web.
            </li>
            <li className="list-disc">
              {" "}
              Recomendable para el diseño de aplicaciones web compatibles con
              grandes equipos de desarrolladores y diseñadores web que necesitan
              gran control sobre el comportamiento de la aplicación.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="subtitle"> Desventajas:</h2>
          <ul className="mx-auto w-10/12 text-justify">
            <li className="list-disc">
              La cantidad de archivos que se deben mantener incrementa
              considerablemente.
            </li>
            <li className="list-disc">
              La curva de aprendizaje es más alta que utilizando otros modelos.
            </li>{" "}
            <li className="list-disc">
              Su separación en capas, aumenta la complejidad del sistema.
            </li>
          </ul>
        </div>
        <img
          src="https://designlopers.com/views/assets/post/Desarrollo_de_aplicaciones_profesionales_en_PHP_y_MVC.png"
          alt="MVC"
          className="mx-auto w-11/12 pt-3 pb-8"
        />
      </div>
    </Layaout>
  );
}
