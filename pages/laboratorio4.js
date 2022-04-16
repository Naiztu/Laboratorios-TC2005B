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
import LoaderCard from "../components/LoaderCard";
import Modal from "../components/Modal";

function Laboratorio4() {
  let url = "/api/javascript";
  let { data } = useFetch(url);
  return (
    <Layaout>
      <h1 className=" title">JavaScript</h1>
      <div className="divider" />
      <section className="mx-auto mb-24 flex w-full flex-col space-y-8 md:w-10/12 lg:w-8/12">
        <Funcion1 />

        <Funcion2 />

        <Funcion3 />

        <Funcion4 />

        <Funcion5 />

        <Funcion6 />
      </section>
      <h1 className="mx-auto w-11/12 text-center text-3xl font-bold">
        Preguntas:
      </h1>
      <section className="mx-auto mb-16 flex w-full flex-col space-y-8 md:w-10/12 lg:w-8/12">
        {data.length === 0 ? (
          <LoaderCard />
        ) : (
          data.map((item) => <Card item={item} key={item.id}></Card>)
        )}
      </section>

      {data.map((item) => (
        <Modal item={item} key={item.id}></Modal>
      ))}
    </Layaout>
  );
}

export default Laboratorio4;
