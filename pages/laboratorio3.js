import React from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Layaout from "./components/Layaout";

const listlab3 = [
  {
    id: "31",
    response: `Que hay que usarlo cuando se identifica un prioridad en el estilo y que pueda sobreescribirse por los demas estilos css.`,
    image:
      "https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png",
    apa: `Publicado por Ing. Hugo Delgado. (2021, 8 junio). La regla !important en CSS. Diseño Web akus.net. Recuperado 17 de febrero de 2022, de: `,
    link: "https://disenowebakus.net/la-regla-important-en-css.php#:%7E:text=La%20palabra%20clave%20!,a%20todas%20las%20dem%C3%A1s%20especificaciones",
    question:
      "Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS? ",
  },
  {
    id: "32",
    response: `Tenemos que tener varios factores en cuenta, desde que el fondo cambia respecto a la pantalla, lo que si no es adecuada se veria mal. Tambien hay que tener en cuenta derechos de autor siempre que se realiza una.`,
    image: "https://desarrolloweb.com/media/271/fondos-imagen.jpg",
    apa: `No se uso ninguna referencia en este apartado`,
    link: "",
    question:
      "Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?",
  },
  {
    id: "33",
    response: `Todo depende con el elemento que se le quiere dar una propiedad de medida, si es algun elemento que se puede hacer responsivo, es adecuado el %. Pero si es un elemento que no importa su tamaño en la diferentes pantallas, el pt, px, rem, son adecuados para definir un tamaño especifico`,
    image:
      "https://www.efectovisual.cl/templates/yootheme/cache/cabecera-responsivo-1e868e75.jpeg",
    apa: `Krall, C. (s. f.). Cómo obtener claves o contraseñas de redes wifi (cracking «a por naranjas») ¿Es segura una red inalámbrica? apr. Recuperado 17 de febrero de 2022, de: `,
    link: "https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=728:unidades-de-medida-css-relativas-o-absolutas-in-cm-mm-pt-pc-pixel-px-porcentaje-em-ex-cu01024d&catid=75&Itemid=203",
    question:
      "Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?",
  },
  {
    id: "34",
    response: `Se utiliza para hacer que el archivo css del sitio web, pese menos y sea mas rapido de leer para el navegador.`,
    image: "https://asphaltthemes.com/wp-content/uploads/2016/10/minifycss.png",
    apa: `López, J. (2018, 27 abril). Cómo minimizar archivos de CSS y Javascript en WordPress. WordPress Directo. Recuperado 17 de febrero de 2022, de: `,
    link: "https://wpdirecto.com/minimizar-archivos-wordpress/#:%7E:text=El%20t%C3%A9rmino%20%C2%ABminimizar%C2%BB%20se%20utiliza,innecesarios%20de%20su%20c%C3%B3digo%20fuente.",
    question:
      "¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?",
  },
];

export default function laboratorio3() {
  return (
    <Layaout>
      <h1 className=" text-5xl font-bold mx-auto pb-6 pt-24 text-center">CSS:</h1>

      <div className="divider px-10"></div>

      <section className="w-full md:w-10/12 lg:w-8/12 mx-auto flex flex-col space-y-8 mb-16">
      {listlab3.map((item) => (
            <Card item={item} key={item.id}></Card>
          ))}
      </section>

      {listlab3.map((item) => (
            <Modal  item={item} key={item.id}></Modal>
          ))}
    </Layaout>
  );
}
