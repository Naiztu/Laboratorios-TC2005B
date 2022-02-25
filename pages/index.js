import Layaout from "./components/Layaout";

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
              href="#info"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Layaout>
  );
}
