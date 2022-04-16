import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Layaout from "../components/Layaout";

export default function Laboratorio17() {
  const dataInit = { rows: [], fields: [] };

  const [table, setTable] = useState("materiales");
  const [data, setData] = useState(dataInit);

  const getData = async () => {
    try {
      const res = await Axios.get(`/api/table/${table}`);
      setData(res.data);
      console.log(data);
    } catch (error) {
      setData(dataInit);
    }
  };
  useEffect(() => {
    getData();
  }, [table]);

  return (
    <Layaout>
      <h1 className="title">Conexión a la base de datos</h1>
      <div className=" flex items-center justify-center ">
        <label className="subtitle pr-4">Tabla a consultar: </label>
        <div className="dropdown">
          <label tabIndex="0" className="btn mx-1">
            {table}
          </label>
          <ul
            tabIndex="0"
            className="rounded-boxw-52 dropdown-content menu bg-base-100 p-2 shadow"
          >
            <li>
              <a onClick={() => setTable("materiales")}>Materiales</a>
            </li>
            <li>
              <a onClick={() => setTable("proveedores")}>Proveedores</a>
            </li>
            <li>
              <a onClick={() => setTable("proyectos")}>Proyectos</a>
            </li>
            <li>
              <a onClick={() => setTable("entregan")}>Entregas</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto w-9/12 max-h-[500px] overflow-y-auto my-4  flex  justify-center scrollbar-thin  ">
        <table className="table-auto ">
          <thead className="bg-neutral/20">
            <tr className="">
              {data.fields.map((item, index) => (
                <th className=" uppercase" key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {data.rows.map((item, index) => (
              <tr key={index}>
                {Object.entries(item).map((el) => (
                  <td key={el[0]} className="py-1 px-4">{el[1]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layaout>
  );
}
