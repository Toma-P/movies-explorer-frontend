import MoviesCard from "../MoviesCard/MoviesCard";
import moviesList from "../../utils/constants";

function MoviesCardList() {
  return(
    <section className="cards">
      <ul className="cards__list">
       {moviesList.map((item) => (<MoviesCard kei={item.id} movie={item} />))}
      </ul>
    </section>
  )
}

export default MoviesCardList;