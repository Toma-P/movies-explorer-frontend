import React from 'react';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

function Movies({loggedIn, handleSearchMovies, isLoading, movies, messageText, setMessageText, checkbox, searchValue, handleClick, handleDeleteMovie, savedMovies}) {
  React.useEffect(() => {
    setMessageText('');
  }, [])
  
  return(
    <>
      <Header loggedIn={loggedIn}/>
      <main className="content">
        <section className="movies">
          <SearchForm 
            handleSearchMovies={handleSearchMovies} 
            checkbox={checkbox} 
            searchValue={searchValue}
          />
          {isLoading ? (
            <Preloader />
          ) : messageText 
          ? <p className="cards__message">{messageText || '' }</p> 
          : (
            <MoviesCardList 
              movies={movies} 
              handleClick={handleClick} 
              handleDeleteMovie={handleDeleteMovie} 
              savedMovies={savedMovies}
            />
          )}
          
        </section>
      </main>
      <Footer />
    </>
  )
}
export default Movies;
