import React from "react";
import Card2 from "../components/Card2";
import { useFetch } from "../components/hooks/useFecth";
import Layaout from "../components/Layaout";

export default function Laboratorio12() {
    let url = "/api/templates";
  let { data } = useFetch(url);
  return (
    <Layaout>
      <div className="pt-16">
          <h1 className="title">Template Engienes</h1>
          <div className=" w-10/12  mx-auto flex items-center justify-center flex-row flex-wrap mb-10">
              {data.map((i)=>(
                  <Card2 data={i} key={i.id}/>
              ))}
          </div>
      </div>
    </Layaout>
  );
}
