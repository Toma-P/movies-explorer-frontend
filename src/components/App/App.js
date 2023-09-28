import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { auth } from '../../utils/AuthApi';
import { api } from '../../utils/MainApi';
import { getInitialMovies } from "../../utils/MoviesApi";
import useMovieFilter from '../../hooks/useMovieFilter';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [checkboxState, setCheckboxState] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [savedMovieMessageText, setSavedMovieMessageText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { movieFilter } = useMovieFilter();
  const [isSearch, setIsSearch] = useState(false);
  const navigate = useNavigate();

  function handleSearchMovies(value, isShort, isMoviesPage) {
    setIsLoading(true);
    setMessageText('');

    if(!isMoviesPage) {
      setIsSearch(true);
      const filteredMoviesResult = movieFilter(savedMovies, value, isShort);
      setFilteredSavedMovies(filteredMoviesResult);
      setIsLoading(false);
      if(filteredSavedMovies.length === 0) {
        setSavedMovieMessageText('Ничего не найдено');
      }
    } else {
      if (!movies.length) {
        getInitialMovies()
          .then((moviesData) => {
            localStorage.setItem("movies", JSON.stringify(moviesData));
            setMovies(moviesData);
            const filteredMoviesResult = movieFilter(moviesData, value, isShort);
            setFilteredMovies(filteredMoviesResult);
            setCheckboxState(isShort);
            setSearchValue(value);
            localStorage.setItem("searched", JSON.stringify(filteredMoviesResult));
            localStorage.setItem("checkbox", JSON.stringify(isShort));
            localStorage.setItem("searchValue", JSON.stringify(value));
          })
          .catch((error) => {
            console.error("Ошибка при загрузке фильмов:", error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        const filteredMoviesResult = movieFilter(movies, value, isShort);
        setFilteredMovies(filteredMoviesResult);
        setCheckboxState(isShort);
        setSearchValue(value);
        localStorage.setItem("searched", JSON.stringify(filteredMoviesResult));
        localStorage.setItem("checkbox", JSON.stringify(isShort));
        localStorage.setItem("searchValue", JSON.stringify(value));
        setIsLoading(false);
        if(filteredMovies.length === 0) {
          setMessageText('Ничего не найдено');
        }
      }
    }
   
  }

  React.useEffect(() => {
    if (!filteredMovies || filteredMovies.length === 0) {
      setMessageText('Ничего не найдено');
    } else {
      setMessageText('');
    }
  }, [filteredMovies]);

  React.useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      auth.checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          navigate("/movies");
          const storedMovies = JSON.parse(localStorage.getItem("movies"));
          setMovies(storedMovies);
          const searchedMovies = JSON.parse(localStorage.getItem("searched"));
          setFilteredMovies(searchedMovies);
          const value = JSON.parse(localStorage.getItem("searchValue"));
          setSearchValue(value);
          const checkbox = JSON.parse(localStorage.getItem("checkbox"));
          setCheckboxState(checkbox);
      })
      .catch((err) => {
        console.log("Ошибка страницы:", err);
      })
    }
  }, [])

  React.useEffect(() => {
    if(loggedIn) {
      api.getCurrentUser()
      .then((res) => {
       setCurrentUser(res);
      })
      .catch((err) => {
        console.log("Ошибка страницы:", err);
      });
    }
  }, [loggedIn])

  React.useEffect(() => {
    api.getFavoriteMovies()
        .then((res) => {
          setSavedMovies(res);
        })
        .catch((err) => {
          console.log("Ошибка страницы:", err);
        })
  }, [filteredMovies, loggedIn]);

  function handleRegister(data) {
    auth.register(data.name, data.email, data.password)
      .then(() => {
        setErrorMessage('');
        handleAuthorization(data);
      })
      .catch((err) => {
        console.log("Ошибка страницы:", err);
        if(err === 409) {
          setErrorMessage('Пользователь с таким email уже существует');
        } else if(err === 400 ) {
          setErrorMessage('При регистрации пользователя произошла ошибка');
        } else {
          setErrorMessage('На сервере произошла ошибка')
        }
      })
  }

  function resetMessages() {
    setUpdateMessage('');
    setErrorMessage('');
  }

  function handleAuthorization(data) {
    auth.authorization(data.password, data.email)
      .then((res) => {
        if(res.token) {
          localStorage.setItem('token', res.token);
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        console.log("Ошибка страницы:", err);
        if(err === 401) {
          setErrorMessage('Вы ввели неправильный логин или пароль');
        } else {
          setErrorMessage('При авторизации пользователя произошла ошибка');
        }
      })
  }

  function handleUpdateUser(data) {
    api.updateUserInfo(data)
      .then((res) => {      
        setCurrentUser(res);
        setUpdateMessage('Данные успешно отредактированы')
      })
      .catch((err) => {
        console.log("Ошибка страницы:", err);
        setUpdateMessage('При обновлении профиля произошла ошибка');
      })
  }

  function handleFavButtonClick(movie) {
    const isSavedMovie = savedMovies.some((item) => item.movieId === movie.id);
    if (!isSavedMovie) {
      api.addFavoriteMovie(movie)
        .then((savedMovie) => setSavedMovies([savedMovie, ...savedMovies]))
        .catch((err) => {
          console.log("Ошибка страницы:", err);
        })
    } else {
      const savedMovieId = savedMovies.find(
        (item) => item.movieId === movie.id
      )._id;
      api.deleteMovie(savedMovieId)
        .then(() => {
          setSavedMovies((savedMovie) =>
          savedMovie.filter((item) => item.movieId !== movie.id)
          );
        })
        .catch((err) => {
          console.log("Ошибка страницы:", err);
        })
    }
  };

  function handleDeleteMovie(movieId) {
    api.deleteMovie(movieId)
      .then(() => {
        setSavedMovies((movies) => 
          movies.filter((item) => 
            item._id !== movieId)
        )
      })
      .catch((err) => {
        console.log("Ошибка страницы:", err);
      })
  }

  function signOut() {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    setMovies([]);
    setFilteredMovies([]);
    setCheckboxState(false);
    setSearchValue('');
    navigate('/');
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route 
            path="/" 
            element={<Main 
              loggedIn={loggedIn} 
            />}
          />
          <Route path="/*" element={<NotFound />} />
          <Route 
            path="/movies" 
            element={<ProtectedRoute 
              loggedIn={loggedIn} 
              element={Movies} 
              handleSearchMovies={handleSearchMovies} 
              isLoading={isLoading} 
              movies={filteredMovies} 
              messageText={messageText} 
              setMessageText={setMessageText} 
              checkbox={checkboxState} 
              searchValue={searchValue} 
              handleClick={handleFavButtonClick} 
              savedMovies={savedMovies} 
              handleDeleteMovie={handleDeleteMovie}
            />}
          />
          <Route 
            path="/saved-movies" 
            element={<ProtectedRoute 
              loggedIn={loggedIn} 
              element={SavedMovies} 
              savedMovies={savedMovies} 
              handleDeleteMovie={handleDeleteMovie} 
              filteredSavedMovies={filteredSavedMovies} 
              handleSearchMovies={handleSearchMovies} 
              isSearch={isSearch} 
              setIsSearch={setIsSearch} 
              messageText={savedMovieMessageText} 
              setMessageText={setSavedMovieMessageText}
            />} 
          /> 
          <Route 
            path="/profile" 
            element={<ProtectedRoute 
              loggedIn={loggedIn} 
              element={Profile} 
              onUpdateUser={handleUpdateUser} 
              signOut={signOut} 
              updateMessage={updateMessage} 
              resetUpdateMessages={resetMessages}
            />}
          />
          <Route 
            path="/signin" 
            element={<Login 
              onAuthorization={handleAuthorization} 
              errorMessage={errorMessage} 
              resetErrorMessages={resetMessages} 
            />} 
          />
          <Route 
            path="/signup" 
            element={<Register 
              onRegister={handleRegister} 
              errorMessage={errorMessage} 
              resetErrorMessages={resetMessages}
            />}
          />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
