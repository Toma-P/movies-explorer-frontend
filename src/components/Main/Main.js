import { useRef } from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";


function Main() {

  const scrollEffect = useRef();
  const handleScroll = () => {
    scrollEffect.current.scrollIntoView({
      block: 'end', 
      inline: 'nearest',
      behavior: 'smooth',
    });
  };

  return(
    <main className="content">
      <Header />
      <Promo handleScroll={handleScroll}/>
      <AboutProject scroll={scrollEffect}/>
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  )
}

export default Main;