import React from "react";
import Layaout from "../components/Layaout";

export default function laboratorio5() {
  return (
    <Layaout>
      <h1 className=" title">¿Que es Tailwind?</h1>
      <section className="mx-auto flex w-11/12 flex-col space-y-4 md:w-10/12 lg:w-8/12">
        <p className="font-semibold">
          {" "}
          La documentación oficial de tailwind, lo define como:
        </p>
        <p className="sm:8/12 mx-auto w-11/12 text-center italic">
          &quot;Tailwind CSS es un framework CSS de bajo nivel altamente
          personalizable que le permite crear diseños personalizados eliminando
          los estilos de componentes pre-definidos que necesitarías
          sobre-escribir en todo caso&quot;.
        </p>
        <p className="pl-4 font-semibold"> Ejemplo:</p>
        <div className="flex flex-col items-center justify-center space-y-4 space-x-8 md:flex-row">
          <div className="mockup-code">
            <code className="mx-auto flex w-11/12 text-base text-slate-200">
              <span className="">
                &lt;<span className="text-purple-400">img</span> className=
                <span className="text-cyan-400">
                  &quot;object-cover rounded-full w-24 h-24&quot;
                </span>
                &nbsp; src=&quot;/imagen.jpg&quot;&gt;
              </span>
            </code>
          </div>
          <div>
            <img
              className="mx-auto h-24 w-24 rounded-full object-cover"
              src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
              alt="imagen"
              width="384"
              height="512"
            />
          </div>
        </div>
        <p className="mx-auto">
          {" "}
          Y asi de facil es poner una imagen redondeada
        </p>

        <h1 className=" mx-auto pb-6 pt-16 text-center text-5xl font-bold">
          Ventajas de Tailwind
        </h1>
        <p className="font-semibold">
          -&gt; Es altamente personalizable
          <br />
          -&gt; Tiene patrones de utilidad comunes
          <br />
          -&gt; Se puede optimizar usando PurgeCSS
          <br />
          -&gt; Permite la creación de diseños complejos y responsive de forma
          libre
          <br />
          -&gt; Facilita la interacción fluida con la comunidad
        </p>
        <p className="text-center">
          Toda esta pagina esta estilizada con Tailwind y es responsiva
        </p>
      </section>
    </Layaout>
  );
}
