import React from 'react';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({loggedIn, savedMovies, handleDeleteMovie, filteredSavedMovies, handleSearchMovies, isSearch, setIsSearch, messageText, setMessageText}) {

  React.useEffect(() => {
    setIsSearch(false);
    setMessageText('');
  }, [])

  return(
    <>
      <Header loggedIn={loggedIn}/>
      <main className="content">
        <section className="saved-movies">
          <SearchForm handleSearchMovies={handleSearchMovies}/>
          {messageText 
          ? <p className="cards__message">{messageText ?? '' }</p> 
          : (<MoviesCardList 
              savedMovies={savedMovies} 
              handleDeleteMovie={handleDeleteMovie} 
              filteredSavedMovies={filteredSavedMovies} 
              isSearch={isSearch} 
              setIsSearch={setIsSearch}
            />)
          }
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;