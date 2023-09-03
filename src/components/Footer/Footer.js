
function Footer() {
  return(
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__copyright">© 2023</p>
        <nav>
          <ul className="footer__nav-links">
            <li>
              <a className="footer__nav-link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer noopener">Яндекс.Практикум</a>
            </li>
            <li>
              <a className="footer__nav-link" href="https://github.com/Toma-P" target="_blank" rel="noreferrer noopener">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;