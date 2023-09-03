import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

function Movies() {
  return(
    <>
      <Header />
      <section className="movies">
        <SearchForm />
        <Preloader />
        <MoviesCardList />
        <button className="movies__button">Ещё</button>
      </section>
      <Footer />
    </>
  )
}
export default Movies;