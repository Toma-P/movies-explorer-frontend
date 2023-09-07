import { Link } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';

function Logo() {
  return(
    <Link to="/" ><img className="logo" src={headerLogo} alt="Логотип проекта" /></Link>
  )
}

export default Logo;