import { useLocation } from 'react-router-dom';

function MoviesCard({movie, isSaved, onFavButtonClick, deleteMovie}) {
  
  const location = useLocation();
  const { duration, trailerLink, image, nameRU } = movie;
  const movieImage = `https://api.nomoreparties.co/${image.url}`;

  const movieTiming = () => {
    const min = duration % 60;
    const hours = Math.floor(duration / 60);
    return `${hours}ч ${min}м`;
  };

  function handleFavButton() {
    onFavButtonClick(movie);
  }

  function handleDeleteButton() {
    deleteMovie(movie._id);
  }

  return(
  <li className="card">
    <div className="card__container">
      <h2 className="card__title">{nameRU}</h2>
      <p className="card__subtitle">{movieTiming()}</p>
      {location.pathname === "/saved-movies"
        ? <button className="card__delete-button" type="button" onClick={handleDeleteButton}/>
        : <button className={`card__fav-button ${isSaved ? 'card__fav-button_active' : ''}`} onClick={handleFavButton} type="button" />
      }
    </div>
    <a className="card__link" href={trailerLink} target="_blank" rel="noreferrer noopener">
      {location.pathname === "/saved-movies" 
        ? <img className="card__image" src={movie.image} alt={nameRU}/>
        : <img className="card__image" src={movieImage} alt={nameRU}/>
      }
    </a>
  </li>
  )
}

export default MoviesCard;