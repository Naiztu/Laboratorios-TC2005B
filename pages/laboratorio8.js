import React from "react";
import Card2 from "../components/Card2";
import Layaout from "../components/Layaout";
import LoaderCard from "../components/LoaderCard";
import Promedio from "../components/Promedio";

const data = [
  {
    id: "1",
    title: "html",
    link: "/api/html",
    img: "https://acumbamail.com/blog/wp-content/uploads/2014/10/maquetacion-email-html.png",
  },
  {
    id: "2",
    title: "css",
    link: "/api/css",
    img: "https://www.bitdegree.org/learn/storage/media/images/css-tutorial-img1-01.o.png",
  },
  {
    id: "3",
    title: "js",
    link: "/api/javascript",
    img: "https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg",
  },
  {
    id: "4",
    title: "Eventos",
    link: "/api/eventos",
    img: "https://www.lancetalent.com/blog/wp-content/uploads/crear-formularios-online-1.png",
  },
];

function laboratorio8() {
  return (
    <Layaout>
      <Promedio />
      <h1 className=" title"> APIS usadas en esta pagina</h1>
      <div className="mx-auto mb-6 flex w-10/12 flex-wrap justify-center">
        {data.length === 0 ? (
          <LoaderCard />
        ) : (
          data.map((item) => <Card2 key={item.id} data={item} />)
        )}
      </div>
    </Layaout>
  );
}

export default laboratorio8;
