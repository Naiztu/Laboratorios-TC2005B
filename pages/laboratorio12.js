import React from "react";
import Card2 from "../components/Card2";
import { useFetch } from "../components/hooks/useFecth";
import Layaout from "../components/Layaout";
import LoaderCard from "../components/LoaderCard";

export default function Laboratorio12() {
  let url = "/api/templates";
  let { data } = useFetch(url);
  return (
    <Layaout>
      <h1 className="title">Template Engienes</h1>
      <div className=" mx-auto  mb-10 flex w-10/12 flex-row flex-wrap items-center justify-center">
        {data.length === 0 ? (
          <LoaderCard />
        ) : (
          data.map((i) => <Card2 data={i} key={i.id} />)
        )}
      </div>
    </Layaout>
  );
}
