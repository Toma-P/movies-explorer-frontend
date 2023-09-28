import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import useFormValidate from '../../hooks/useFormValidate';

function SearchForm({handleSearchMovies, checkbox, searchValue}) {
  
  const location = useLocation();
  const { values, errors, isValid, handleChanges } = useFormValidate();
  const [isShort, setIsShort] = useState(false);
  const [newSearch, setNewSearch] = useState('');
  const isMoviePage = location.pathname === "/movies";
  
  useEffect(() => {
    if (!isValid) {
      if(!isMoviePage) {
        handleSearchMovies(newSearch, isShort, isMoviePage);
      } else {
        return;
      }
    }
    handleSearchMovies(newSearch, isShort, isMoviePage);
  }, [isShort, isMoviePage]);

  useEffect(() => {
    if (isMoviePage) {
      setNewSearch(searchValue);
      setIsShort(checkbox);
    } else {
      setNewSearch('');
      setIsShort(false);
    }
  }, [isMoviePage]);

  function handleCheckbox() {
    setIsShort(!isShort);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(isValid) {
      handleSearchMovies(values.movie, isShort, isMoviePage);
      setNewSearch(values.movie);
    }
  }

  return(
    <>
      <form className="search-form" onSubmit={handleSubmit}>
         <div className="search-form__container">
            <input 
              className="search-form__input" 
              type="text" 
              name="movie" 
              placeholder="Фильм" 
              minLength="1" 
              value={values.movie ?? newSearch}
              pattern='^[a-zA-Zа-яА-ЯёЁ\s\-]+$'
              onChange={handleChanges} 
              required 
            />
            <span 
              className="search-form__error">
                {errors.movie || ''}
            </span>
            <button 
              type="submit" 
              className="search-form__submit-button" 
              disabled={!isValid} 
            />
        </div>
        <label className="search-form__shorts">
          <input 
            className="search-form__checkbox" 
            type="checkbox" 
            checked={isShort} 
            onChange={handleCheckbox}
          />
          <span className="search-form__checkbox-toggle" />
          <span 
            className="search-form__checkbox-text">
              Короткометражки
          </span>
        </label>
      </form>
    </>
  )
}

export default SearchForm;