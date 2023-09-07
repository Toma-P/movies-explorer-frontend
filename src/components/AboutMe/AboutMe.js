import myPhoto from "../../images/my-photo.jpeg";

function AboutMe() {
  return(
    <section className="profile">
      <h2 className="profile__title">Студент</h2>
      <div className="profile__student">
        <div className="profile__student-info">
          <h3 className="profile__name">Тамара</h3>
          <p className="profile__job">Фронтенд-разработчик, 30 лет</p>
          <p className="profile__about">
            Я живу в Ростове-на-Дону. По образованию учитель-логопед, окончила ЮФУ.
            До учебы в Практикуме работала в детском саду и вела частную практику. 
            Я люблю слушать музыку и увлекаюсь посткроссингом, а ещё изучаю японский язык.
            Курс по веб-разработке был увлекательным, и я планирую продолжить свой путь в этой сфере. 
          </p>
          <a className="profile__link" href="https://github.com/Toma-P" target="_blank" rel="noreferrer noopener">Github</a>
        </div>
        <img className="profile__photo" src={myPhoto} alt="Фото студента" />
      </div>
    </section>
  )
}

export default AboutMe;