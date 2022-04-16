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
      {access ? <Shop /> : <Login setAccess={setAccess} />}

      <h1 className="mx-auto mt-16 w-11/12 text-center text-3xl font-bold">
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
