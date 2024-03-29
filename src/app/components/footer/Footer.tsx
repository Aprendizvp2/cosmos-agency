import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import logocosmosblue from "../../assets/img/logo-cosmos-blue.png";

export default function Footer() {
  return (
    <footer className="bg-white w-full px-10 md:px-32 py-20">
      <div className="flex flex-col sm:flex-col xl:flex-row justify-between items-center">
        <img className="w-[200px]" src={logocosmosblue} alt="alt" />
        <div>
          <FacebookIcon className="mx-4 my-4" sx={{ color: "#0c0c34" }} />
          <TwitterIcon className="mx-4 my-4" sx={{ color: "#0c0c34" }} />
          <InstagramIcon className="mx-4 my-4" sx={{ color: "#0c0c34" }} />
          <GoogleIcon className="mx-4 my-4" sx={{ color: "#0c0c34" }} />
        </div>
      </div>
      <h4 className="text-base text-center mt-24 text-[#0c0c34]">
        Copyright © 2024 Cosmos Agency - Desarrollo de Software | Diseñado por
        Factorial Studio
      </h4>
    </footer>
  );
}
