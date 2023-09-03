function AboutProject({ scroll }) {

  return(
    <section className="project" ref={scroll}>
      <h2 className="project__title">О проекте</h2>
      <div className="project__info">
        <h3 className="project__info-title">Дипломный проект включал 5 этапов</h3>
        
        <p className="project__info-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h3 className="project__info-title">На выполнение диплома ушло 5 недель</h3>
        <p className="project__info-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="project__timeline">
        <p className="project__timeline-item">1 неделя</p>
        <p className="project__timeline-item project__timeline-item_color_gray">4 недели</p>
        <p className="project__timeline-caption">Front-end</p>
        <p className="project__timeline-caption">Back-end</p>
      </div>
    </section>
  )
}

export default AboutProject;