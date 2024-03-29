import { AppBar } from "@mui/material";
import logocosmos from "../../assets/img/logo_cosmos.png";

export default function Header() {
  return (
    <AppBar position="absolute" color="transparent" elevation={0}>
      <div className="w-full bg-transparent flex justify-between flex-row items-center absolute z-10 px-10 xl:px-32 py-8">
        <div className="flex">
          <img className="w-[140px]" src={logocosmos} alt="logo" />
        </div>
        <div className="flex flex-row items-center">
          <a
            href="#home"
            className="text-white text-sm xl:text-xl text-center mx-2 xl:mx-4"
          >
            Inicio
          </a>
          <a
            href="#about"
            className="text-white text-sm xl:text-xl text-center mx-2 xl:mx-4"
          >
            Nosotros
          </a>
          <a
            href="#services"
            className="text-white text-sm xl:text-xl text-center mx-2 xl:mx-4"
          >
            Servicios
          </a>
          <a
            href="#contact"
            className="text-white text-sm xl:text-xl text-center mx-2 xl:mx-4"
          >
            Contáctanos
          </a>
          <button className="bg-white text-sm xl:text-xl hover:bg-transparent text-black hover:text-white hover:border-white border-2 ease-in-out duration-500 py-2 xl:py-4 px-2 xl:px-8 mx-2 xl:mx-4 rounded-md">
            Tel: (+57) 321 123 4567
          </button>
        </div>
      </div>
    </AppBar>
  );
}
