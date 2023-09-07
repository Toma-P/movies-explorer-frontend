import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return(
    <>
      <Header />
      <main className="content">
        <section className="saved-movies">
          <SearchForm />
          <MoviesCardList />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;