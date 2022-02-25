import React, { useState } from 'react';
import Card from "./components/Card";
import Layaout from "./components/Layaout";
import Login from "./components/Login";
import Modal from "./components/Modal";
import Shop from "./components/Shop";

const listlab6 = [
  {
    id: "61",
    response: `De esta forma, si el usuario ha cometido algún error al rellenar el formulario, se le puede notificar de forma instantánea, sin necesidad de esperar la respuesta del servidor.`,
    image: "https://cdn-icons-png.flaticon.com/512/2343/2343713.png",
    apa: `Uniwebsidad. (s. f.). 7.3. Validación (Introducción a JavaScript). Recuperado 22 de febrero de 2022, de: `,
    link: "https://uniwebsidad.com/libros/javascript/capitulo-7/validacion#:~:text=Antes%20de%20enviar%20un%20formulario,esperar%20la%20respuesta%20del%20servidor.",
    question:
      "¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?",
  },
  {
    id: "62",
    response: `<strong>-&gt;</strong> Desactivar javascript del navegador <br/>
    <strong>-&gt;</strong> Ver la direccion en el action y enviar mediante otra app la info <br/>
    <strong>-&gt;</strong> Inyección de código o XSS`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
    apa: `No se uso una referencia`,
    link: "",
    question:
      "¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?",
  },
  {
    id: "63",
    response: `Para que el trabajo que tenga que hacer el servidor sea menor o que no saque errores extraños que son mas dificiles de leer`,
    image: "https://laurentiudobrescu.ro/wp-content/uploads/2020/11/front-end-sau-back-end.png",
    apa: `No se uso una referencia`,
    link: "",
    question:
      "Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?",
  },
];

export default function laboratorio6() {

const [access, setAccess] = useState(true);

  return (
    <Layaout>
      <div className="pt-16">
        {access ? <Shop /> : <Login setAccess={setAccess} />}
      </div>
      <h1 className="text-3xl font-bold w-11/12 mx-auto text-center mt-16">
        Preguntas:
      </h1>
      <section className="w-full md:w-10/12 lg:w-8/12 mx-auto flex flex-col space-y-8 mb-16">
        {listlab6.map((item) => (
          <Card item={item} key={item.id}></Card>
        ))}
      </section>
      {listlab6.map((item) => (
        <Modal item={item} key={item.id}></Modal>
      ))}
    </Layaout>
  );
}
