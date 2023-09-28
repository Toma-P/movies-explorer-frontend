import { useState } from "react";
import { useLocation } from 'react-router-dom';
import Burger from '../Burger/Burger';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({loggedIn}) {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const [isClicked, setIsClicked] = useState(false);

  function handleBurgerClick() {
    setIsClicked(!isClicked);
  }

  return(
    <header className={`header ${isHomepage ? 'header_homepage' : ''}`}>
      <Logo />
      <Navigation isLogged={loggedIn} isHomepage={isHomepage} isClicked={isClicked}/>
      {loggedIn && <Burger burgerClick={handleBurgerClick} isClicked={isClicked} />}
    </header>
  ) 
}

export default Header;