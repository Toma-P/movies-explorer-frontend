import { Link, NavLink } from 'react-router-dom';
import accountPic from '../../images/account-pic.svg';

function Navigation({ isLogged, isHomepage, isClicked }) {

  if(!isLogged) {
    return(
      <div className="navigation">
        <nav className="navigation__links">
          <NavLink className={({isActive}) => `navigation__link ${isHomepage ? 'navigation__link_homepage' : ''} ${isActive ? 'navigation__link_active' : ''}`} to="/signup">Регистрация</NavLink>
          <NavLink className={({isActive}) => `navigation__link ${isHomepage ? 'navigation__link_homepage' : ''} ${isActive ? 'navigation__link_active' : ''}`} to="/signin">
            <button className="navigation__link-button">Войти</button>
          </NavLink> 
        </nav>
      </div>
    )
  } else {
    return(
      <div className={`navigation navigation_auth ${isClicked ? 'navigation_slide' : ''}`}>
        <div className={`navigation__container ${ !isClicked ? 'navigation__container_slide' : ''}`}>
          <nav className="navigation__links navigation__links_auth">
            {isClicked && <NavLink className={({isActive}) => `navigation__link navigation__link_auth ${isHomepage ? 'navigation__link_homepage' : ''} ${isActive ? 'navigation__link_active' : ''}`} to="/">Главная</NavLink>}
            <NavLink className={({isActive}) => `navigation__link navigation__link navigation__link_auth ${isHomepage ? 'navigation__link_homepage' : ''} ${isActive ? 'navigation__link_active' : ''}`} to="/movies">Фильмы</NavLink>
            <NavLink className={({isActive}) => `navigation__link navigation__link navigation__link_auth ${isHomepage ? 'navigation__link_homepage' : ''} ${isActive ? 'navigation__link_active' : ''}`} to="/saved-movies">Сохранённые фильмы</NavLink> 
          </nav>
          <Link className={`navigation__account-link ${isHomepage ? 'navigation__account-link_homepage' : ''}`} to="/profile">Аккаунт
            <button className="navigation__link-button navigation__link-button_auth"><img  src={accountPic} alt="Кнопка аккаунта"/></button>
          </Link>
        </div>
    </div>
    )
  }
 
}

export default Navigation;