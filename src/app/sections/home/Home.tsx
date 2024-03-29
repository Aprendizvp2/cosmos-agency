import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import imgcontact from "../../assets/img/img-contact.png";
import imgtwo from "../../assets/img/img-two.jpeg";
import "../../styles/styles.css";

function Home() {
  return (
    <main
      id="home"
      className="flex min-h-screen flex-col items-center justify-between relative"
    >
      <div className="bgimg-home">
        <video autoPlay loop muted className="absolute inset-0 object-cover">
          <source
            src="https://thecosmoscreative.com/wp-content/uploads/2024/03/y2mate.com-Signal-Technology-Opener-After-Effects-Template-AE-Templates_1080p.mp4"
            type="video/mp4"
          />
          Tu navegador no admite la reproducción de videos.
        </video>
        <div className="absolute inset-0 bg-black opacity-65" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white mx-8">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-center w-full xl:w-[70%] leading-tight mt-8">
            Conectamos ambiciones, creamos posibilidades
          </h1>
          <h6
            className="text-base xl:text-lg text-center my-10"
            data-aos="fade-up"
          >
            Cosmos Agency, donde la creatividad encuentra su máxima expresión
            digital.
          </h6>
          <a
            href="#contact"
            className="bg-white hover:bg-transparent text-black hover:text-white border-white border-2 hover:border-white ease-in-out duration-500 py-3 px-8 rounded-md normal-case"
          >
            <span className="flex flex-row justify-center items-center gap-2">
              <LocalPhoneIcon />
              Contáctanos
            </span>
          </a>
        </div>
      </div>
      <div className="bg-black flex flex-col sm:flex-col xl:flex-row justify-between items-center w-full px-10 xl:px-32 py-32 gap-20">
        <div className="w-full xl:w-1/2">
          <h1 className="text-white text-4xl font-medium text-center xl:text-left w-full xl:w-10/12">
            ¿Tienes dudas sobre nuestros productos?
          </h1>
          <h4 className="text-white text-base text-center xl:text-justify mt-8 w-full xl:w-11/12">
            Con el siguiente formulario podemos ayudarte a aclarar todo tipo de
            dudas respecto a nuestros productos y servicios. Para nosotros es
            muy importa la opinión y las ideas creativas de todos nuestros
            clientes, tómese unos minutos y llénelo.
          </h4>
          <div className="flex flex-row items-center justify-center xl:justify-start mt-8">
            <LocalPhoneIcon sx={{ color: "white" }} />
            <h4 className="text-white uppercase text-lg text-center xl:text-left mx-2 xl:mx-4">
              CONTÁCTA CON NOSOTROS
            </h4>
          </div>
          <h4 className="text-white text-2xl text-center xl:text-left font-medium mt-4">
            (+57) 321 123 4567
          </h4>
        </div>
        <div className="flex flex-col px-0 xl:px-20 w-full xl:w-1/2 items-center">
          <img className="w-full xl:w-[350px]" src={imgcontact} alt="alt" />
          <div className="p-8 bg-[#0c0c24]">
            <input
              className="my-2 px-4 py-4 w-full xl:w-[370px] rounded"
              placeholder="Nombre"
            />
            <input
              className="my-2 px-4 py-4 w-full xl:w-[370px] rounded"
              placeholder="Correo"
            />
            <input
              className="my-2 px-4 py-4 w-full xl:w-[370px] rounded"
              placeholder="Teléfono"
            />
            <button className="bg-white hover:bg-transparent text-black hover:text-white border-white hover:border-white border-2 ease-in-out duration-500 w-3/5 md:w-[30%] xl:w-1/2 py-3 my-2 rounded-md normal-case">
              Enviar
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#0c0c24] flex flex-col xl:flex-row justify-between items-center w-full px-10 xl:px-32 py-32 gap-20">
        <div className="w-full xl:w-1/2">
          <img className="w-full xl:w-[600px] rounded-md" src={imgtwo} alt="alt" />
        </div>
        <div className="w-full xl:w-1/2">
          <h1 className="text-white text-4xl font-medium text-center xl:text-left w-full xl:w-10/12">
            Servicio, calidad y compromiso
          </h1>
          <h4 className="text-white text-lg text-center xl:text-left mt-6">
            Diseñamos sistemas a tu medida
          </h4>
          <div className="flex flex-col items-center xl:items-start">
            <h4 className="text-white text-base text-justify mt-8 w-10/12">
              Para nosotros es un placer impactar y fortalecer el mundo de la
              tecnología, por eso ponemos el corazón en cada uno de nuestros
              proyectos con la idea de mejorar cada día.
            </h4>
            <h4 className="text-white text-base text-justify mt-8 w-10/12">
              El desarrollo de software a avanzado con el tiempo y nosotros
              nunca nos quedamos atrás, todos los días tratamos de innovar cada
              vez en nuestro trabajo por eso nos consideramos profesionales en
              cada cosa que hacemos.
            </h4>
            <h4 className="text-white text-2xl font-bold  xl:text-left mt-8">
              Gerson Mina
            </h4>
            <h4 className="text-white text-lg  xl:text-left">
              CEO – Cosmos Agency
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
