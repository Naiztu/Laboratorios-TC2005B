import React, { useEffect } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Layaout from "../components/Layaout";
import { useFetch } from "../components/hooks/useFecth";

function Laboratorio1() {
  let url = "/api/html";
  let {data}= useFetch(url);
  return (
    <Layaout>
      <div className="pt-16">
        <h1 className=" text-5xl font-bold mx-auto pb-6 pt-8 text-center">
          Preguntas:
        </h1>

        <div className="divider px-10"></div>
        <section className="w-full md:w-10/12 lg:w-8/12 mx-auto flex flex-col space-y-8 mb-10">
          {data.map((item) => (
            <Card item={item} key={item.id}></Card>
          ))}
        </section>
      </div>
      {data.map((item) => (
        <Modal item={item} key={item.id}></Modal>
      ))}
    </Layaout>
  );
}

export default Laboratorio1;
