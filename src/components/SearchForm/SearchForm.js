function SearchForm() {
  return(
    <form className="search-form">
       <div className="search-form__container">
          <input className="search-form__input" type="text" placeholder="Фильм" minLength="1" required />
          <span className="search-form__error"></span>
        <button type="submit" className="search-form__submit-button" />
      </div>
      <label className="search-form__shorts">
        <input className="search-form__checkbox" type="checkbox" />
        <span className="search-form__checkbox-toggle" />
        <span className="search-form__checkbox-text">Короткометражки</span>
      </label>
    </form>
  )
}

export default SearchForm;