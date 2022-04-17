import Layaout from "../components/Layaout";
import LinkLaboratorios from "../components/LinkLaboratorios";
import { FaArrowDown } from "react-icons/fa";

const labs = Array(29).fill(1, 1).map((__, i) => (i))

export default function Home() {
  return (
    <Layaout>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url("/img/home.jpg")',
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Ángel Rico</h1>
            <p className="mb-5">
              Soy José Ángel Rico Mendieta, estudiante de Ingeniería en
              Tecnologías Computacionales con la matrícula A01707404 y el correo
              A01707404@tec.mx. Me gustan mucho el futbol, escuchar música y
              programar.
            </p>
            <a
              href="#labs"
              className=" mx-auto btn mt-3 h-10 w-12  animate-bounce  rounded-full "
            >
              <FaArrowDown className="-mt-[10px]" size={70} />
            </a>
          </div>
        </div>
      </div>
      <section id="labs">
        <br />
        <br />
        <h1 className="title">Laboratorios</h1>
        <div className=" mx-auto flex w-full flex-wrap justify-center pb-12">
          {labs.map((i) => (
            <LinkLaboratorios num={i} key={i} />
          ))}
        </div>
      </section>
    </Layaout>
  );
}
