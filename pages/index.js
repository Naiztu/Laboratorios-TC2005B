import Layaout from "../components/Layaout";

export default function Home() {
  return (
    <Layaout>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url("https://scontent.fntr4-1.fna.fbcdn.net/v/t1.6435-9/57589791_1230438023791284_1662305386121658368_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH2KPpVv3PnWZPhNeK2JP_SHN0rGDlOlSEc3SsYOU6VIYT5z8Qx2lHUEOSOwt5-B5QjrUTaJmOjbxQ7egsBYdWz&_nc_ohc=AG8_bGEDoDEAX9UajLE&_nc_ht=scontent.fntr4-1.fna&oh=00_AT_KazeBIWV_lPx0ZXqKohzhZQ_LMhQipVEWSmsiUjx5fA&oe=62354F29")',
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Ángel Rico</h1>
            <p className="mb-5">
              Soy José Ángel Rico Mendieta, estudiante de Ingeniería en
              Tecnologías Computacionales con la matrícula A01707404 y el correo
              A01707404@tec.mx. Me gustan mucho el futbol, escuchar música y
              programar.
            </p>
            <a
              className="btn rounded-full w-12 h-10 p-2 mt-3 animate-bounce lex items-center justify-center"
              href="https://github.com/Naiztu/Laboratorios-TC2005B"
              target={"_blank"} rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-white"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Layaout>
  );
}
