
function Burger({burgerClick, isClicked}) {

  return(
    <button className={`header__burger-button ${isClicked ? 'header__burger-button_active' : ''}`} type="button" onClick={burgerClick}/>
  )
}

export default Burger;