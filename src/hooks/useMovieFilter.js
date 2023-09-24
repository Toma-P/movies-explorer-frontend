function useMovieFilter() {
  
  const shortMovieFilter = (movie) => {
    return movie.filter(({ duration }) => duration <= 40);
  }

  const movieFilter = (movies, value, isShort) => {
    const filteredMovies = movies.filter((movie) => {
      return (movie.nameRU || movie.nameEN).toLowerCase().includes(value.toLowerCase());
    });
    if(isShort) {
      return shortMovieFilter(filteredMovies);
    }
    return filteredMovies;
  }

  return { shortMovieFilter, movieFilter };
}

export  default useMovieFilter;