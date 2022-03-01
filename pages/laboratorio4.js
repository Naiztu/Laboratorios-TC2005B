import React from "react";
import Card from "../components/Card";
import Funcion1 from "../components/Funcion1";
import Funcion2 from "../components/Funcion2";
import Funcion3 from "../components/Funcion3";
import Funcion4 from "../components/Funcion4";
import Funcion5 from "../components/Funcion5";
import Funcion6 from "../components/Funcion6";
import { useFetch } from "../components/hooks/useFecth";
import Layaout from "../components/Layaout";
import Modal from "../components/Modal";


function Laboratorio4() {
  let url = "/api/javascript";
  let {data}= useFetch(url);
  return (
    <Layaout>
      <div className="pt-16 w-11/12 mx-auto flex flex-col">
        <h1 className=" text-5xl font-bold mx-auto pb-6 pt-16">JavaScript</h1>
        <div className="divider" />
        <section className="w-full md:w-10/12 lg:w-8/12 mx-auto flex flex-col space-y-8 mb-24">
          <Funcion1 />

          <Funcion2 />

          <Funcion3 />

          <Funcion4 />

          <Funcion5 />

          <Funcion6 />
        </section>
      </div>
      <h1 className="text-3xl font-bold w-11/12 mx-auto text-center">Preguntas:</h1>
      <section className="w-full md:w-10/12 lg:w-8/12 mx-auto flex flex-col space-y-8 mb-16">
        {data.map((item) => (
          <Card item={item} key={item.id}></Card>
        ))}
      </section>

      {data.map((item) => (
        <Modal item={item} key={item.id}></Modal>
      ))}
    </Layaout>
  );
}

export default Laboratorio4;
