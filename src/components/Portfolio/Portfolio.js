import portfolioLinkPic from "../../images/portfolio-link-pic.svg";

function Portfolio() {
  return(
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="https://toma-p.github.io/russian-travel/index.html" target="_blank" rel="noreferrer noopener">
            <p className="portfolio__item-name">Статичный сайт</p>
            <img className="portfolio__item-icon" src={portfolioLinkPic} alt="Стрелочка для перехода по ссылке"/>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__item-link" href="https://toma-p.github.io/mesto/index.html" target="_blank" rel="noreferrer noopener">
            <p className="portfolio__item-name">Адаптивный сайт</p>
            <img className="portfolio__item-icon" src={portfolioLinkPic} alt="Стрелочка для перехода по ссылке"/>
          </a>
        </li>
        <li className="portfolio__item portfolio__last-item">
          <a className="portfolio__item-link" href="https://github.com/Toma-P/react-mesto-api-full-gha" target="_blank" rel="noreferrer noopener">
            <p className="portfolio__item-name">Одностраничное приложение</p>
            <img className="portfolio__item-icon" src={portfolioLinkPic} alt="Стрелочка для перехода по ссылке"/>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;