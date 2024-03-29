import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Catalogue() {
  return (
    <div className="bg-[#0c0c24] flex flex-col justify-between items-center w-full px-10 xl:px-32 py-32">
      <div className="flex flex-col sm:flex-row items-center w-full gap-4">
        <div className="w-full xl:w-1/2">
          <h3 className="text-white text-4xl font-medium text-left">
            Bienvenido a nuestro catálogo
          </h3>
          <h4 className="text-white text-base text-left mt-6 w-11/12">
            Aquí encontraras la mayoría de nuestros servicios
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full xl:w-1/2">
          <div className="bg-white px-8 py-12 flex flex-col justify-center items-center">
            <h1 className="text-black text-xl font-bold text-center">
              01. Extensiones
            </h1>
          </div>
          <div className="bg-gradient-to-r from-blue-800 to-gray-500 px-8 py-12 flex flex-col justify-center items-center">
            <h1 className="text-white text-xl font-bold text-center">
              02. Paginas
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 w-full">
        <div className="bg-white px-8 py-12 flex flex-col justify-center items-center">
          <h1 className="text-black text-xl font-bold text-center">
            03. Branding
          </h1>
        </div>
        <div className="bg-gradient-to-r from-blue-800 to-gray-500 px-8 py-12 flex flex-col justify-center items-center">
          <h1 className="text-white text-xl font-bold text-center">
            04. Publicidad
          </h1>
        </div>
        <div className="bg-white px-8 py-12 flex flex-col justify-center items-center">
          <h1 className="text-black text-xl font-bold text-center">
            05. Programación
          </h1>
        </div>
        <div className="bg-gradient-to-r from-blue-800 to-gray-500 px-8 py-12 flex flex-col justify-center items-center">
          <h1 className="text-white text-xl font-bold text-center">06. API</h1>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center mt-4 w-full gap-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full xl:w-1/2">
          <div className="bg-white px-8 py-12 flex flex-col justify-center items-center">
            <h1 className="text-black text-xl font-bold text-center">
              07. Diseño
            </h1>
          </div>
          <div className="bg-gradient-to-r from-blue-800 to-gray-500 px-8 py-12 flex flex-col justify-center items-center">
            <h1 className="text-white text-xl font-bold text-center">
              08. Otros
            </h1>
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <div className="bg-white px-6 py-9 flex flex-col justify-center items-start rounded-br-full">
            <div className="flex flex-row items-center">
              <LocalPhoneIcon color="action" fontSize="small" />
              <h4 className="text-black uppercase text-base mx-2">
                CONTÁCTA CON NOSOTROS
              </h4>
            </div>
            <h1 className="text-black text-xl font-medium">
              (+57) 321 123 4567
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
