import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Funcion1 from "./components/Funcion1";
import Funcion2 from "./components/Funcion2";
import Funcion3 from "./components/Funcion3";
import Funcion4 from "./components/Funcion4";
import Funcion5 from "./components/Funcion5";
import Funcion6 from "./components/Funcion6";
import Layaout from "./components/Layaout";
import Modal from "./components/Modal";

const listlab4 = [
  {
    id: "41",
    response: `Lo unico semejante son sus nombre, ya que los creadores de javascript querian un buen nombre para popularizar el lenguaje y como java era el mas popular en ese entonces. De diferencias tienen muchas, java es robusto, tiene que ser compilado su codigo y esta orientado a la OOP. Mientras que javascript es un lenguaje interpretado, basado en prototipos y sus variable son flexibles.`,
    image:
      "https://codersera.com/blog/wp-content/uploads/2021/03/java-vs-javascript.jpg",
    apa: `¿Qué diferencias hay entre JavaScript y Java? | HACK A BOSS. (s. f.). hack a boss. Recuperado 17 de febrero de 2022, de: `,
    link: "https://www.hackaboss.com/blog/diferencias-javascript-java#:~:text=%C2%BFPor%20qu%C3%A9%20tienen%20nombres%20parecidos,en%20JavaScript%2C%20y%20a%20la%20inversa",
    question: "¿Qué diferencias y semejanzas hay entre Java y JavaScript?",
  },
  {
    id: "42",
    response: `<span class="font-bold">getDate() -> </span> regresa el numero de dia del mes <br/>
      <span class="font-bold">getFullYear() -> </span> regresa los cuatro digitos del año <br/>
      <span class="font-bold">getHours() -> </span> regresa la hora del 0 al 23<br/>
      <span class="font-bold">getMonth() -> </span> regresa el mes del 0 al 11 <br/>
      <span class="font-bold">getTime() -> </span> regresa el tiempo en formato UTC.
      `,
    image:
      "http://d2u4q3iydaupsp.cloudfront.net/V5YO5LHMp5frxVe1M2KDvWlRdCsAstHEdKRHQiMTmMmQ5sSbKfzLQTSHQunLHINrty5m5SHsgdi27ltRAO3bQpCGkOUaZwmLFpWtzTxierV7emeOx4JHgSBwO17QmDyS",
    apa: `Date. (2022, 18 febrero). JavaScript | MDN. Recuperado 19 de febrero de 2022, de: `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
    question: "¿Qué métodos tiene el objeto Date?",
  },
  {
    id: "43",
    response: `<span class="font-bold">push() -> </span> agrega un elemento al final<br/>
      <span class="font-bold">pop() -> </span> remueve el ultimo elemento <br/>
      <span class="font-bold">map() -> </span> se realiza una función por cada elemento<br/>
      <span class="font-bold">fill() -> </span> llena el arreglo desde un numero hasta otro <br/>
      <span class="font-bold">find() -> </span> regresa el elemento que se esta buscando.`,
    image:
      "https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/array-in-python/Images/array%20diagram.png",
    apa: `Array. (2022, 18 febrero). JavaScript | MDN. Recuperado 19 de febrero de 2022, de: `,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
    question: "¿Qué métodos tienen los arreglos?",
  },
  {
    id: "44",
    response: `<span class="font-bold">let -> </span> se recomienda para variables locales para bloques o de funciones.<br/>
      <span class="font-bold">var -> </span> se usa para variables globales o locales en funciones.`,
    image:
      "https://uploadgerencie.com/imagenes/ejemplo-del-uso-de-variables-en-excel.png",
    apa: `Padial, J. (2020, 17 abril). Diferencias clave entre var, let y const en JavaScript. CybMeta. Recuperado 19 de febrero de 2022, de: `,
    link: "https://cybmeta.com/var-let-y-const-en-javascript",
    question:
      "¿Cómo se declara una variable con alcance local dentro de una función?",
  },
  {
    id: "45",
    response: `El problema de las variables globales es que crea dependencias ocultas. Cuando se trata de aplicaciones grandes, ni tú mismo sabes/recuerdas/tienes claro los objetos que tienes y sus relaciones. Ademas que se busca que las variables tengan un menor tiempo de vida para no consumir muchos recursos.`,
    image: "https://enfermeriaunam.files.wordpress.com/2016/04/variables.png",
    apa: `¿Por qué es considerado una mala práctica utilizar variables globales? (2016, 21 octubre). [Foro]. Stack Overflow en español.`,
    link: "https://es.stackoverflow.com/questions/29177/por-qu%C3%A9-es-considerado-una-mala-pr%C3%A1ctica-utilizar-variables-globales",
    question:
      "¿Qué implicaciones tiene utilizar variables globales dentro de funciones?",
  },
];

function laboratorio4() {
  return (
    <Layaout>
      <div className="pt-16 w-11/12 mx-auto flex flex-col">
        <h1 className=" text-5xl font-bold mx-auto pb-6 pt-16">JavaScript</h1>
        <div className="divider" />
        <section className="w-full md:w-10/12 lg:w-8/12 mx-auto flex flex-col space-y-8 mb-24">
          <Funcion1 />

          <Funcion2 />

          <Funcion3 />

          <Funcion4 />

          <Funcion5 />

          <Funcion6 />
        </section>
      </div>
      <h1 className="text-3xl font-bold w-11/12 mx-auto text-center">Preguntas:</h1>
      <section className="w-full md:w-10/12 lg:w-8/12 mx-auto flex flex-col space-y-8 mb-16">
        {listlab4.map((item) => (
          <Card item={item} key={item.id}></Card>
        ))}
      </section>

      {listlab4.map((item) => (
        <Modal item={item} key={item.id}></Modal>
      ))}
    </Layaout>
  );
}

export default laboratorio4;
