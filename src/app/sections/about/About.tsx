import { DevelopIcon } from "../../assets/svg/DevelopIcon";
import { DesignIcon } from "../../assets/svg/DesignIcon";
import imgthree from "../../assets/img/img-three.webp";

function About() {
  return (
    <div
      id="about"
      className="bg-[#0c0c24] flex flex-col xl:flex-row justify-between items-center w-full px-10 xl:px-32 py-32 gap-20"
    >
      <div className="w-full xl:w-1/2">
        <h3 className="text-white text-2xl font-medium text-center xl:text-left">
          Bienvenido a Cosmos Agency
        </h3>
        <h4 className="text-white text-base text-center mt-8 w-full xl:w-11/12">
          Somos una agencia virtual que se dedica al desarrollo y programación
          digital en distintos campos. Nos apasiona la tecnología y los grandes
          avances del software en general te invitamos a que trabajes con
          nosotros.
        </h4>
        <div className="flex flex-col xl:flex-row items-center mt-8 gap-8">
          <div className="bg-white rounded-full p-4">
            <DevelopIcon />
          </div>
          <div>
            <h4 className="text-white text-lg text-center xl:text-left mx-8">
              Desarrollo web y aplicaciones móviles
            </h4>
            <h5 className="text-white text-base text-center xl:text-left mx-8 mt-4">
              Desde aplicaciones para dispositivos celulares hasta extensiones
              útiles para tu desempeño.
            </h5>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center mt-8 gap-8">
          <div className="bg-white rounded-full p-4">
            <DesignIcon />
          </div>
          <div>
            <h4 className="text-white text-lg text-center xl:text-left mx-8">
              Diseño gráfico, publicidad y branding
            </h4>
            <h5 className="text-white text-base text-center xl:text-left mx-8 mt-4">
              Diseñamos tu marca, entendemos el mercado actual y te ayudamos a
              impulsarla.
            </h5>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/2">
        <img className="w-full xl:w-[600px] rounded-md" src={imgthree} alt="alt" />
      </div>
    </div>
  );
}

export default About;
