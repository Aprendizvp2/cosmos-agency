import { AdvancedIcon } from "../../assets/svg/AdvancedIcon";
import { CompromiseIcon } from "../../assets/svg/CompromiseIcon";
import { WarrantyIcon } from "../../assets/svg/WarrantyIcon";
import { QualityIcon } from "../../assets/svg/QualityIcon";

export default function Services() {
  return (
    <div
      id="services"
      className="bgimg-profe flex flex-col justify-center items-center w-full px-10 xl:px-32 py-32"
    >
      <div className="flex flex-col">
        <h1 className="text-white text-4xl xl:text-5xl font-medium text-center">
          Profesionalismo a otro nivel
        </h1>
        <h4 className="text-white text-xl text-center mt-6">
          Características esenciales en nuestro trabajo
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-10 w-full">
        <div className="relative py-32">
          <div className="absolute inset-0 z-0 bluris" />
          <div className="absolute inset-0 z-10 px-6 xl:px-8 py-6 xl:py-10 rounded flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-8">
              <QualityIcon width={44} height={44} color="#FFF" />
              <h1 className="text-white text-2xl font-bold text-center mt-4">
                Calidad
              </h1>
            </div>
            <h4 className="text-white text-base text-center mt-2 mb-4">
              Ofrecemos proyectos de alta calidad, nuestro objetivo siempre será
              complacer al cliente.
            </h4>
          </div>
        </div>
        <div className="relative py-32">
          <div className="absolute inset-0 z-0 bluris" />
          <div className="absolute inset-0 z-10 px-6 xl:px-8 py-6 xl:py-10 rounded flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-8">
              <WarrantyIcon width={44} height={44} color="#FFF" />
              <h1 className="text-white text-2xl font-bold text-center mt-4">
                Garantía​
              </h1>
            </div>
            <h4 className="text-white text-base text-center mt-2 mb-4">
              Siempre te daremos lo mejor, si tu producto no es como esperabas
              puedes escribirnos.
            </h4>
          </div>
        </div>
        <div className="relative py-32">
          <div className="absolute inset-0 z-0 bluris" />
          <div className="absolute inset-0 z-10 px-6 xl:px-8 py-6 xl:py-10 rounded flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-8">
              <CompromiseIcon width={44} height={44} color="#FFF" />
              <h1 className="text-white text-2xl font-bold text-center mt-4">
                Compromiso
              </h1>
            </div>
            <h4 className="text-white text-base text-center mt-2 mb-4">
              Somos una entidad organizada, estaremos para ti las 24 horas del
              día durante toda la semana.
            </h4>
          </div>
        </div>
        <div className="relative py-32">
          <div className="absolute inset-0 z-0 bluris" />
          <div className="absolute inset-0 z-10 px-6 xl:px-8 py-6 xl:py-10 rounded flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-8">
              <AdvancedIcon width={44} height={44} color="#FFF" />
              <h1 className="text-white text-2xl font-bold text-center mt-4">
                Avance
              </h1>
            </div>
            <h4 className="text-white text-base text-center mt-2 mb-4">
              Representamos un avance tecnológico bastante amplio, por eso
              siempre vamos a la vanguardia.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
