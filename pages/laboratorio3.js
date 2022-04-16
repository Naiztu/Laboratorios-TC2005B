import React from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Layaout from "../components/Layaout";
import { useFetch } from "../components/hooks/useFecth";
import LoaderCard from "../components/LoaderCard";

export default function Laboratorio3() {
  let url = "/api/css";
  let { data } = useFetch(url);
  return (
    <Layaout>
      <h1 className=" title">CSS:</h1>

      <div className="divider px-10"></div>

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
