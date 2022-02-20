const listlab1 = [
  {
    id: "1",
    question: "¿Cuál es la diferencia entre Internet y la World Wide Web?",
    response: `<strong> Internet -></strong> es una inmensa red de computadoras alrededor de todo el mundo conectadas entre sí. <br /><strong> WWW -> </strong> La web (World Wide Web) es una enorme colección de páginas que se asienta sobreesa red de computadoras. <br />Así que cuando navegas a través de tu celular o computadora usas internet para acceder a la web.`,
    image: "https://definicion.de/wp-content/uploads/2008/05/WWW-1.jpg",
    apa: `BBC News Mundo. (2019, 12 marzo). ¿Cuál es la diferencia entre
    internet
    y la
    web? (y por qué
    muchos las confunden). Recuperado 14 de febrero de 2022, de
    `,
    link: "https://www.bbc.com/mundo/noticias-47538812#:~:text=Internet%20es%20una%20inmensa%20red,para%20acceder%20a%20la%20web.",
  },
  {
    id: "2",
    question: "¿Cuáles son las partes de un URL?",
    response: `<strong>-></strong> Protocolo HTTP/S <br />
      <strong>-></strong> Subdominio<br />
      <strong>-></strong> Dominio<br />
      <strong>-></strong> TLD<br />
      <strong>-></strong> Ruta<br />
      <strong>-></strong> Parámetro<br />
      <strong>-></strong> Etiqueta`,
    image:
      "https://comofuncionaque.com/wp-content/uploads/2015/04/La-URL-es-la-direccion-de-una-informacion-que-se-encuentra-en-un-determinado-alojamiento-o-dominio-de-la-red.png",
    apa: ` Pukocz, E. (2019, 14 noviembre). Partes de una URL con ejemplos y explicación fácil. Edyta Pukocz.
    Recuperado 14 de febrero de 2022, de `,
    link: "https://edytapukocz.com/url-partes-ejemplos-facil/",
  },
  {
    id: "3",
    question:
      "¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?",
    response: `<strong>GET -> </strong>Se emplea para leer una representación de un recurso<br />
      <strong>POST -> </strong>Se emplea para el envio de datos<br />
      <strong>PUT -> </strong> Se emplea para la actualizacion de informacion existente<br />
      <strong>PATCH -> </strong> Se emplea para modificaciones parciales de un recurso en particular.<br />
      <strong>DELETE -></strong> Se emplea para eliminar informción existente`,
    image: "https://ports.zone/statics/home2/img/http.svg",
    apa: `Morales, W. (2021, 1 junio). Métodos HTTP – POST, GET, PUT, DELETE. Estilo Web. Recuperado 14 de febrero de 2022, de: `,
    link: "http://estilow3b.com/metodos-http-post-get-put-delete/#:~:text=Sem%C3%A1nticamente%20el%20m%C3%A9todo%20HTTP%20PUT,es%20similar%20a%20un%20UPDATE.",
  },
  {
    id: "4",
    question:
      "¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?",
    response: `Se puede usar diferentes metodos dependiendo el enfoque del formulario, pero para un login, se usa mayormente el metodo POST, ya que permite el envio de información.`,
    image:
      "https://solocodigoweb.com/wp-content/uploads/2017/06/api-http-design-restful.png",
    apa: `Mi primer formulario HTML - Aprende sobre desarrollo web | MDN. (2022, 17 febrero). MDN WEB DOCS. Recuperado 14 de febrero de 2022, de: `,
    link: "https://developer.mozilla.org/es/docs/Learn/Forms/Your_first_form",
  },
  {
    id: "5",
    question:
      "¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?",
    response: `<strong>GET </strong> ya que al acceder por la url, esta pidiendo el cliente la parte visual de la pagina.`,
    image:
      "https://pc-solucion.es/wp-content/uploads/2018/06/metodo-post-y-get-diferencias-1.png",
    apa: `Morales, W. (2021, 1 junio). Métodos HTTP – POST, GET, PUT, DELETE. Estilo Web. Recuperado 14 de febrero de 2022, de: `,
    link: "http://estilow3b.com/metodos-http-post-get-put-delete/#:~:text=Sem%C3%A1nticamente%20el%20m%C3%A9todo%20HTTP%20PUT,es%20similar%20a%20un%20UPDATE.",
  },
  {
    id: "6",
    question:
      "Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?",
    response: `Nos ofrece el statutus de que la peticien hecha al servidor, se realizo correctamente.`,
    image:
      "https://hospedagemwordpresspro.com.br/wp-content/uploads/2019/09/200-OK-Status-Code-HTTP.jpg",
    apa: `¿Qué es el código de respuesta 200 OK? (2020, 20 octubre). Human Level. Recuperado 14 de febrero de 2022, de: `,
    link: "https://www.humanlevel.com/diccionario-marketing-online/codigo-de-respuesta-200-ok#:%7E:text=El%20c%C3%B3digo%20de%20respuesta%20200%2C%20ok%2C%20es%20un%20c%C3%B3digo%20de,servidor%20y%20aceptada%20por%20%C3%A9ste.",
  },
  {
    id: "7",
    question:
      "¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?",
    response: `Dependiendo la causa, ya que puede ser culpa de que el usuario puso una direccion mal, se cambio de url o se elimino. Pero si es una url que debe ser accedida, si es problema del desarrollador.`,
    image: "https://www.ricos.software/assets/404.svg",
    apa: `ᐅ Error 404 · ¿Qué es y cómo solucionarlo de manera rápida y efectiva? - InboundCycle. (s. f.). IBD. Recuperado 14 de febrero de 2022, de: `,
    link: "https://www.inboundcycle.com/diccionario-marketing-online/error-404",
  },
  {
    id: "8",
    question:
      "¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?",
    response: `Si, ya que se debe a un error interno del servidor, el cual solo tiene acceso el desarrollador.`,
    image:
      "https://www.lucushost.com/blog/wp-content/uploads/2020/06/ejemplo-error-500-servidor-litespeed.png",
    apa: `Qué es y cómo solucionar el Error 500. Internal server error. (2022, 17 enero). cdmon. Recuperado 14 de febrero de 2022, de: `,
    link: "https://www.cdmon.com/es/blog/error-500-internal-server-error#:~:text=El%20Error%20500%20%2D%20Internal%20server%20error%2C%20es%20un%20c%C3%B3digo%20de,cu%C3%A1l%20es%20el%20problema%20exacto.",
  },
  {
    id: "9",
    question:
      "¿Qué significa que un atributo HTML5 esté depreciado o desaprobado(deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.",
    response: `Son partes del estándar HTML cuyo uso ya no es recomendado, algunos ejemplos son:<br/>
        <strong> applet ->  </strong>remplazado por object <br/>
        <strong> dir ->  </strong>remplazado por ul <br/>
        <strong> insindex ->  </strong>remplazado por input <br/>
        <strong> menu ->  </strong>remplazado por ul`,
    image: "https://leadsfac.com/wp-content/uploads/2019/07/que-es-html5.jpg",
    apa: `05.Tags y atributos desaprobados en HTML - TODO HTML. (s. f.). Todo HTML. Recuperado 14 de febrero de 2022, de: `,
    link: "https://sites.google.com/site/dwebhtml/reference/deprecated#:%7E:text=Los%20tags%20y%20atributos%20desaprobados,son%20agregada%2C%20removidas%20o%20desaprobadas.",
  },
  {
    id: "10",
    question: "¿Cuáles son las diferencias principales entre HTML 4 y HTML5?",
    response: `Las principales diferencias entre el HTML 4 y 5, son:<br/>
    <strong> meta ->  </strong>etiqueta usada para definir un juego de caracteres. <br/>
    <strong> doctype ->  </strong>se simplifico <br/>
    <strong> svg ->  </strong>permite incluir elementos SVG <br/>
    <strong> ->  </strong>Se introducen nuevos elementos, como: section, article, aside, header, footer, etc. <br/>`,
    image:
      "http://www.psdahtmlpasoapaso.com/blog/wp-content/uploads/2013/04/html4-html5.jpg",
    apa: `Mora, S. L. (2011, 17 enero). ¿Cuáles son las diferencias entre HTML4 (XHTML 1.0) y HTML5? – Programación en Internet. Programación en Internet. Recuperado 14 de febrero de 2022, de: `,
    link: "https://blogs.ua.es/pi/2011/01/17/%C2%BFcuales-son-las-diferencias-entre-html4-xhtml-1-0-y-html5/",
  },
  {
    id: "11",
    question: "¿Qué componentes de estructura y estilo tiene una tabla?",
    response: `Una tabla HTML (table) es un conjunto de celdas (td o th) organizadas en filas (tr) que a su vez se organizan en grupos de filas (thead, tbody o tfoot). Además, la tabla puede tener una leyenda (caption) y hacer referencia a las columnas (col y colspan).`,
    image:
      "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces/sample1-tabledom.jpg",
    apa: `Marco, B. S. (s. f.). Tablas. HTML. Páginas web HTML y hojas de estilo CSS. Bartolomé Sintes Marco. www.mclibre.org. mclibre.org. Recuperado 14 de febrero de 2022, de: `,
    link: "https://www.mclibre.org/consultar/htmlcss/html/html-tablas.html#:%7E:text=Estructura%20de%20una%20tabla%20()&text=Una%20tabla%20HTML%20(,%3E%20y%20)",
  },
  {
    id: "12",
    question: "¿Cuáles son los principales controles de una forma HTML5?",
    response: `Botón general (input type="button")<br/> número (input type="number")<br/> búsqueda (input type="search"), teléfono (input type="tel")<br/> dirección web (input type="url")<br/> dirección de correo (input type="email")<br/> fecha (input type="date")<br/> hora (input type="time")<br/> color (input type="color")<br/> rango (input type="range")<br/> opciones (option) (para (datalist))<br/> lista de valores (datalist)<br/> salida (output)<br/> barra de progreso (progress) y medidor (meter).`,
    image:
      "http://www.novell.com/documentation/novellaccessmanager/adminguide/graphics/form_fill_test_a.png",
    apa: `Marco, B. S. (s. f.-a). Formularios (1). HTML. Páginas web HTML y hojas de estilo CSS. Bartolomé Sintes Marco. www.mclibre.org. mclibre.org. Recuperado 14 de febrero de 2022, de: `,
    link: "https://www.mclibre.org/consultar/htmlcss/html/html-formularios.html#:%7E:text=En%20HTML%205%20se%20a%C3%B1adieron%20los%20controles%3A%20bot%C3%B3n%20general%20%3Cinput,%3Cinput%20type%3D%22color%22",
  },
  {
    id: "13",
    question: "¿Qué tanto soporte HTML5 tiene el navegador que utilizas?",
    response: `El navegador que uso es Google Chrome y solo tiene 476 puntos de los 555 que conforman el soporte al de HTML5`,
    image:
      "https://i0.wp.com/hipertextual.com/wp-content/uploads/2019/01/hipertextual-extensiones-gestionar-tus-pestanas-google-chrome-2019502901.jpg?fit=1200%2C675&ssl=1",
    apa: `Link test:`,
    link: "http://html5test.com/",
  },
  {
    id: "14",
    question: `Sobre el ciclo de vida y desarrollo de los sistemas de información:
    ¿Cuál es el ciclo de vida de los sistemas de información?
    ¿Cuál es el ciclo de desarrollo de sistemas de información?`,
    response: `
    <span class="font-bold">Fase de planificación.</span> En esta fase se prepara el diseño y posterior implementación del sistema.<br/>
    <span class="font-bold">Fase de análisis.</span> Una vez que el equipo de proyecto se decide por una metodología de desarrollo determinada.<br/>
    <span class="font-bold">Fase de diseño.</span> En este estadio el equipo de proyecto tendrá que determinar cómo el nuevo sistema de información cumplirá con los requisitos aplicables.<br/>
    <span class="font-bold">Fase de desarrollo.</span> Marca las operaciones de la realizacion del proyecto.<br/>
    <span class="font-bold">Fase de integración y periodo de pruebas.</span> El objetivo de esta etapa es corroborar que el diseño propuesto cumple con los requisitos de negocio establecidos. <br/>
    <span class="font-bold">Fase de implementación.</span> Se proceder a la instalación del hardware y software elegidos.<br/>
    <span class="font-bold">Fase de mantenimiento.</span> Consiste en introducir los ajustes necesarios para mejorar el rendimiento y corregir los problemas que puedan surgir. <br/>
    `,
    image:
      "https://www.gestiopolis.com/wp-content/uploads/2015/07/ciclo-de-vida-de-un-sistema-de-informacion-2.jpg.webp",
    apa: ``,
    link: "",
  },
];

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

function createCard(item) {
  let newdiv = document.createElement("div");
  newdiv.innerHTML = `
  <br id="${item.id}" /><br />
              <article class="card bg-base-100 articulo mt-8">
                  <div class="imagen"
                      style=" background-image:linear-gradient(rgba(5,7,12,.75),rgba(5,7,12,.75)),url(${item.image})">
                  </div>
                  <div class="card-body md:w-7/12">
                      <h2 class="card-title text-center">${item.question}</h2>
                      <div class="m-auto pt-4">
                          <div class="m-auto text-justify">
                              <p>${item.response}</p>
                          </div>
                      </div>
                      <div class="justify-end card-actions">
                          <label for="modal${item.id}" class="btn modal-button">Apa</label>
                      </div>
  
                  </div>
              </article>
  `;
  return newdiv;
}

function createModal(item) {
  let newdiv = document.createElement("div");
  newdiv.innerHTML = `
  <input type="checkbox" id="modal${item.id}" class="modal-toggle">
          <div class="modal">
              <div class="modal-box">
                  <h3 class="font-bold text-lg">Referencia Apa:</h3>
                  <p class="mx-auto py-4 w-10/12 text-justify overflow-hidden">
                  ${item.apa}
                  <a class="link link-primary"
                          href="${item.link}"
                          target="_blank">${item.link}</a>
                  </p>
                  <div class="modal-action">
                      <label for="modal${item.id}" class="btn">Ok</label>
                  </div>
              </div>
          </div>
  `;
  return newdiv;
}
const cont = document.getElementById("preguntas");
const mod = document.getElementById("modales");

listlab1.map((item) => {
  cont.appendChild(createCard(item));
  mod.appendChild(createModal(item));
});

const preguntas3 = document.getElementById("lab3");

listlab3.map((item) => {
  preguntas3.appendChild(createCard(item));
  mod.appendChild(createModal(item));
});
