import { Drawer, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import logocosmos from "../../assets/img/logo-cosmos-blue.png";

interface MenuDrawerProps {
  open: boolean;
  toggleMenuDrawer: () => void;
}

export default function MenuDrawer({
  open,
  toggleMenuDrawer,
}: MenuDrawerProps) {
  return (
    <Drawer anchor="right" open={open} onClick={toggleMenuDrawer}>
      <Paper
        sx={{
          width: 320,
          height: "100%",
          borderRadius: 0,
        }}
        className="flex flex-col"
      >
        <div className="flex justify-between items-center px-8 py-4">
        <img className="w-[140px]" src={logocosmos} alt="logo" />
          <IconButton onClick={toggleMenuDrawer}>
            <CloseIcon sx={{ color: "black" }} />
          </IconButton>
        </div>
        <div className="flex flex-col items-start px-8 py-4">
          <a
            href="#home"
            className="text-black text-lg xl:text-xl text-center my-2 xl:my-4"
          >
            Inicio
          </a>
          <a
            href="#about"
            className="text-black text-lg xl:text-xl text-center my-2 xl:my-4"
          >
            Nosotros
          </a>
          <a
            href="#services"
            className="text-black text-lg xl:text-xl text-center my-2 xl:my-4"
          >
            Servicios
          </a>
          <a
            href="#contact"
            className="text-black text-lg xl:text-xl text-center my-2 xl:my-4"
          >
            Contáctanos
          </a>
          <button className="bg-black text-lg xl:text-xl hover:bg-transparent text-white hover:text-white hover:border-white border-2 ease-in-out duration-500 py-2 xl:py-4 px-2 xl:px-8 my-2 xl:my-4 rounded-md">
            Tel: (+57) 321 123 4567
          </button>
        </div>
      </Paper>
    </Drawer>
  );
}
