export default function handler(req, res) {
    res.status(200).json([
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
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
          apa: `No se uso una referencia`,
          link: "",
          question:
            "¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?",
        },
        {
          id: "63",
          response: `Para que el trabajo que tenga que hacer el servidor sea menor o que no saque errores extraños que son mas dificiles de leer`,
          image:
            "https://laurentiudobrescu.ro/wp-content/uploads/2020/11/front-end-sau-back-end.png",
          apa: `No se uso una referencia`,
          link: "",
          question:
            "Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?",
        },
      ])
  }