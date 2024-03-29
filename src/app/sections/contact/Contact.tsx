/* eslint-disable jsx-a11y/iframe-has-title */
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-black flex flex-col justify-center items-center w-full px-10 xl:px-32 py-32"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-white text-4xl xl:text-5xl font-medium text-center">
          ¿Como encontrarnos?
        </h1>
        <h4 className="text-white text-xl text-center my-6">
          Llena el formulario y responderemos lo más rápido posible
        </h4>
        <a
          href="https://www.google.com/maps/d/u/0/edit?mid=1tJln9-8t0A9O3z1SQHNY3iqcww8jX1A&ll=40.72362048116262%2C-73.99108159999999&z=18"
          className="bg-white hover:bg-transparent text-black hover:text-white border-white border-2 hover:border-white ease-in-out duration-500 py-3 px-8 rounded-md normal-case"
        >
          <span className="flex flex-row justify-center items-center gap-2">
            <FmdGoodIcon />
            Ver En Mapa de Google
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 mt-10 w-full">
        <div className="bg-white px-8 py-12 justify-center flex flex-col sm:flex-row items-center text-center sm:items-start gap-10">
          <div className="mt-4">
            <FmdGoodIcon color="action" />
          </div>
          <div>
            <h1 className="text-black text-2xl font-bold">Dirección</h1>
            <h4 className="text-black text-base mt-6">
              Jamundí, Valle del Cauca
            </h4>
            <h4 className="text-black text-base">Calle 12 # 9 – 23</h4>
          </div>
        </div>
        <div className="bg-white px-8 py-12 justify-center flex flex-col sm:flex-row items-center text-center sm:items-start gap-10">
          <div className="mt-4">
            <LocalPhoneIcon color="action" />
          </div>
          <div>
            <h1 className="text-black text-2xl font-bold">Teléfono</h1>
            <h4 className="text-black text-base mt-6">(+57) 321 123 4567</h4>
            <h4 className="text-black text-base">(+57) 321 123 4567</h4>
          </div>
        </div>
        <div className="bg-white px-8 py-12 justify-center flex flex-col sm:flex-row items-center text-center sm:items-start gap-10">
          <div className="mt-4">
            <MailIcon color="action" />
          </div>
          <div>
            <h1 className="text-black text-2xl font-bold">Correo</h1>
            <h4 className="text-black text-base mt-6">gersonmina@gmail.com</h4>
            <h4 className="text-black text-base">gersonmina@gmail.com</h4>
          </div>
        </div>
      </div>
      <div className="bg-[#050032] flex flex-col xl:flex-row justify-between items-center w-full p-6 md:p-10">
        <div className="w-full xl:w-1/2">
          <div className="flex flex-col">
            <h3 className="text-white text-2xl font-medium text-left mb-6 mt-10">
              Agenda tu cita hoy mismo
            </h3>
            <input
              className="mb-6 px-4 py-4 w-full rounded"
              placeholder="Nombre"
            />
            <input
              className="mb-6 px-4 py-4 w-full rounded"
              placeholder="Correo"
            />
            <input
              className="mb-6 px-4 py-4 w-full rounded"
              placeholder="Teléfono"
            />
            <input
              className="mb-6 px-4 pt-4 pb-32 w-full rounded"
              placeholder="Mensaje"
            />
            <button className="bg-white hover:bg-transparent text-black hover:text-white border-white border-2 hover:border-white ease-in-out duration-500 w-10/12 md:w-[30%] py-3 px-8 rounded-md normal-case">
              Enviar
            </button>
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <iframe
            className="mx-0 xl:mx-20 w-full xl:w-[450px] h-[400px] xl:h-[700px] my-10"
            src="https://www.google.com/maps/d/u/0/embed?mid=1tJln9-8t0A9O3z1SQHNY3iqcww8jX1A&ehbc=2E312F"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
