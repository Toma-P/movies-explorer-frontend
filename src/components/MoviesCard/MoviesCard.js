import { useState } from 'react';
import { useLocation } from 'react-router-dom';


function MoviesCard(props) {
  const location = useLocation();

  const [isFav, setIsFav] = useState(false);

  const handleFavButton = () => {
    setIsFav(!isFav);
  }

  return(
  <li className="card">
    <div className="card__container">
      <h2 className="card__title">{props.movie.nameRU}</h2>
      <p className="card__subtitle">{props.movie.duration}</p>
      {location.pathname === "/saved-movies"
        ? <button className="card__delete-button" type="button"/>
        : <button className={`card__fav-button ${isFav ? 'card__fav-button_active' : ''}`} onClick={handleFavButton} type="button" />
      }
    </div>
    <img className="card__image" src={props.movie.image} alt="Обложка фильма"/>
  </li>
  )
}

export default MoviesCard;