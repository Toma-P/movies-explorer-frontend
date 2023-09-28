const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const checkResult = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export const getInitialMovies = () => {
  return fetch(`${BASE_URL}`, {
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then(res => checkResult(res));
}