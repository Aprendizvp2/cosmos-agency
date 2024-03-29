import { useState } from "react";
import { AppBar, IconButton } from "@mui/material";
import logocosmos from "../../assets/img/logo_cosmos.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "../menudrawer/MenuDrawer";

export default function SmallHeader() {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

  const handleOpenMenuDrawer = (): void => {
    setOpenMenuDrawer(!openMenuDrawer);
  };

  return (
    <AppBar
      className="px-10 pt-10"
      position="absolute"
      color="transparent"
      elevation={0}
    >
      <div className="flex justify-between items-center">
        <a href="/">
          <img className="w-[140px]" src={logocosmos} alt="logo" />
        </a>
        <div>
          <MenuDrawer
            open={openMenuDrawer}
            toggleMenuDrawer={handleOpenMenuDrawer}
          />
          <IconButton onClick={handleOpenMenuDrawer}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </div>
      </div>
    </AppBar>
  );
}
