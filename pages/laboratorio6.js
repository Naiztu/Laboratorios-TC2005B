import React, { useState } from "react";
import Card from "../components/Card";
import { useFetch } from "../components/hooks/useFecth";
import Layaout from "../components/Layaout";
import LoaderCard from "../components/LoaderCard";
import Login from "../components/Login";
import Modal from "../components/Modal";
import Shop from "../components/Shop";

export default function Laboratorio6() {
  let url = "/api/eventos";
  let { data } = useFetch(url);

  const [access, setAccess] = useState(false);

  return (
    <Layaout>
      <div className="pt-16">
        {access ? <Shop /> : <Login setAccess={setAccess} />}
      </div>
      <h1 className="text-3xl font-bold w-11/12 mx-auto text-center mt-16">
        Preguntas:
      </h1>
      <section className="w-full md:w-10/12 lg:w-8/12 mx-auto flex flex-col space-y-8 mb-16">
        {data.length === 0 ? (
          <LoaderCard/>
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
