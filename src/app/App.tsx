import { Hidden } from "@mui/material"
import Header from "./components/header/Header";
import SmallHeader from "./components/smallheader/SmallHeader";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Catalogue from "./sections/catalogue/Catalogue";
import Extensions from "./sections/extensions/Extensions";
import Contact from "./sections/contact/Contact";
import Footer from "./components/footer/Footer";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <Home />
      <About />
      <Services />
      <Catalogue />
      <Extensions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
