import React from "react";
import Layaout from "../components/Layaout";

export default function Laboratorio11() {
  return (
    <Layaout>
      <div className="mx-auto w-11/12">
        <h1 className="title">Partes del package.JSON</h1>
        <div className="mb-16 overflow-x-auto">
          <table className="mx-auto mt-10 w-[900px]">
            <thead>
              <tr className="bg-neutral/80 text-white">
                <th>Tipo</th>
                <th>Campo</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col">
                  <div className="string">string</div>
                </td>
                <td>
                  <code className="code">name</code>
                </td>
                <td className="text-center">
                  Nombre del proyecto, librería o paquete. Se recomienda que
                  coincida con el repositorio.
                </td>
              </tr>
              <tr>
                <td className="col">
                  <div className="string">string</div>
                </td>
                <td>
                  <code>version</code>
                </td>
                <td className="text-center">
                  Versión del paquete. Generalmente se utiliza{" "}
                  <strong>semver</strong>.
                </td>
              </tr>
              <tr>
                <td className="col">
                  <div className="string">string</div>
                </td>
                <td>
                  <code>description</code>
                </td>
                <td className="text-center">
                  Descripción breve del paquete o proyecto.
                </td>
              </tr>
              <tr>
                <td className="col">
                  <div className="string">string</div>
                </td>
                <td>
                  <code>main</code>
                </td>
                <td className="text-center">
                  <strong>Punto de entrada</strong> del proyecto. Suele ser{" "}
                  <code>index.js</code> (node) o <code>index.html</code>{" "}
                  (browser).
                </td>
              </tr>
              <tr>
                <td className="col">
                  <div className="string">string</div>
                </td>
                <td>
                  <code>module</code>
                </td>
                <td className="text-center">
                  Idem al anterior, pero respecto a{" "}
                  <a href="/javascript/caracteristicas/modulos-es6/">
                    ES Modules
                  </a>{" "}
                  en lugar de <strong>CommonJS</strong>.
                </td>
              </tr>
              <tr>
                <td className="col">
                  <div className="object">objecto</div>
                </td>
                <td>
                  <code>scripts</code>
                </td>
                <td className="text-center">
                  Colección de scripts del proyecto.
                </td>
              </tr>
              <tr>
                <td className="col">
                  <div className="array">array</div>
                </td>
                <td>
                  <code>keywords</code>
                </td>
                <td className="text-center">
                  <span className="array px-2">array</span> de{" "}
                  <span className="string px-2">string</span> con palabras clave
                  relacionadas con el proyecto. Util en búsquedas.
                </td>
              </tr>
              <tr>
                <td className="col">
                  <div className="string">string</div>
                </td>
                <td>
                  <code>author</code>
                </td>
                <td className="text-center">
                  Nombre del autor del paquete o un{" "}
                  <span className="array px-2">array</span> con{" "}
                  <code>name</code>, <code>email</code> y/o <code>url</code>.
                </td>
              </tr>
              <tr>
                <td className="col">
                  <div className="string">string</div>
                </td>
                <td>
                  <code>license</code>
                </td>
                <td className="text-center">
                  <a href="https://spdx.org/licenses/">Tipo de licencia</a> del
                  paquete o proyecto. Por defecto,{" "}
                  <a href="https://es.wikipedia.org/wiki/Licencia_ISC">ISC</a>.
                </td>
              </tr>
              <tr>
                <td className="col">
                  <div className="object">objecto</div>
                </td>
                <td>
                  <code>dependencies</code>
                </td>
                <td className="text-center">
                  Colección de paquetes para producción y la versión instalada.
                </td>
              </tr>
              <tr>
                <td className="col">
                  <div className="object">objecto</div>
                </td>
                <td>
                  <code>devDependencies</code>
                </td>
                <td className="text-center">
                  Colección de paquetes para desarrollo y la versión instalada.
                </td>
              </tr>
              <tr>
                <td className="col">
                  <div className="string">string</div>
                </td>
                <td>
                  <code>homepage</code>
                </td>
                <td className="text-center">
                  URL de la página principal del paquete.
                </td>
              </tr>
              <tr>
                <td className="col">
                  <div className="object">objecto</div>
                </td>
                <td>
                  <code>repository</code>
                </td>
                <td className="text-center">
                  URL del repositorio. Se debe indicar <code>type</code> (git,
                  svn...) y <code>url</code> (ruta).
                </td>
              </tr>
              <tr>
                <td className="col">
                  <div className="object">objecto</div>
                </td>
                <td>
                  <code>bugs</code>
                </td>
                <td className="text-center">
                  Objeto con campo <code>url</code> con la URL de la página de
                  issues del proyecto.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layaout>
  );
}
