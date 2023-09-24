import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({movies, handleClick, handleDeleteMovie, savedMovies, filteredSavedMovies, isSearch, setIsSearch}) {
  
  const location = useLocation();
  const [visibleMovieList, setVisibleMovieList] = useState([]);
  const [moviesCount, setMoviesCount] = useState(0);
  const [extraCount, setExtraCount] = useState(0);
  const [showLoadMore, setShowLoadMore] = useState(false);
  
  useEffect(() => {
    if(location.pathname === "/movies") {
      setVisibleMovieList(movies.slice(0, moviesCount));
    setShowLoadMore(moviesCount < movies.length);
    }
  }, [movies, moviesCount]);

  useEffect(() => {
    handleScreenWidth();
    window.addEventListener("resize", handleScreenWidth);
    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);

  function handleScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1181) {
      setMoviesCount(12);
      setExtraCount(3);
    } else if (screenWidth >= 676) {
      setMoviesCount(8);
      setExtraCount(2);
    } else {
      setMoviesCount(5);
      setExtraCount(2);
    }
  }

  function handleLoadMore() {
    const newMoviesCount = moviesCount + extraCount;
    setVisibleMovieList(movies.slice(0, newMoviesCount));
    setMoviesCount(newMoviesCount);
    setShowLoadMore(newMoviesCount < movies.length);
  }

  function checkSavedMovie(movies, movie) {
    return movies?.find((item) => {
        return item.movieId === movie.id;
    });
  };

  if(location.pathname === "/saved-movies") {
    return(
      <section className="cards">
         <ul className="cards__list">
           {!isSearch 
            ? savedMovies.map((item) => 
              (<MoviesCard 
                key={item._id} 
                movie={item} 
                deleteMovie={handleDeleteMovie}
              />))
            : filteredSavedMovies.map((item) => 
              (<MoviesCard 
                key={item._id}
                movie={item} 
                deleteMovie={handleDeleteMovie}
              />))
            }
         </ul>
       </section>
)
  } else {
    return(
      <section className="cards">
         <ul className="cards__list">
           {visibleMovieList.map((item) => {
             const saved = checkSavedMovie(savedMovies, item);
             return (
              <MoviesCard 
                key={item.id} 
                movie={item} 
                isSaved={saved} 
                onFavButtonClick={handleClick} 
                deleteMovie={handleDeleteMovie}
              />
             )
           })}
         </ul>
         <button 
          className={`cards__more-button ${showLoadMore ? 'cards__more-button_active' : ''}`} 
          type="button" 
          onClick={handleLoadMore}>
            Ещё
          </button>
       </section>
 
    )
  }
  
}

export default MoviesCardList;