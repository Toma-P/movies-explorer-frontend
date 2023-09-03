import { useLocation } from 'react-router-dom';

function UserInfoForm({ buttonText, children }) {
  const location = useLocation();
  const errorText = "Что-то пошло не так...";

  return (
    <form className="info-form">
      <fieldset className={`info-form__fieldset ${location.pathname ==="/signin" ? 'info-form__fieldset_login' : ''}`}>
        {location.pathname === "/signup" && 
          <label className="info-form__item">
            Имя
            <input className="info-form__item-input" type="text" name="name" placeholder="Имя пользователя" minLength="2" maxLength="30" required/>
            <span className="info-form__item-error">{errorText}</span>
          </label>}
        <label className="info-form__item">
          E-mail
          <input className="info-form__item-input" type="email" name="email" placeholder="Email" required/>
          <span className="info-form__item-error">{errorText}</span>
        </label>
        <label className="info-form__item">
          Пароль
          <input className="info-form__item-input" type="password" name="password" minLength="6" maxLength="12" placeholder="Пароль" required />
          <span className="info-form__item-error">{errorText}</span>
        </label>
      </fieldset>
      <button type="submit" className="info-form__submit-button">{buttonText}</button>
      {children}
    </form>
    
  )
}

export default UserInfoForm;