import promoLogo from '../../images/promo-logo-planet.svg';

function Promo({ handleScroll }) {
  return(
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className="promo__button" onClick={handleScroll} type="button">Узнать больше</button>
      </div>
      <img className="promo__image" src={promoLogo} alt="Планета из логотипов ВЭБ" />
    </section>
  )
}

export default Promo;