import { useLocation } from 'react-router-dom';
import useFormValidate from '../../hooks/useFormValidate';

function UserInfoForm({ onSubmit, errorMessage, buttonText, children }) {
  const location = useLocation();
  const { values, errors, isValid, handleChanges } = useFormValidate();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return ( 
    <form className="info-form" onSubmit={handleSubmit}>
      <fieldset className={`info-form__fieldset ${location.pathname ==="/signin" ? 'info-form__fieldset_login' : ''}`}>
        {location.pathname === "/signup" && 
          <label className="info-form__item">
            Имя
            <input 
              className="info-form__item-input"
              type="text"
              name="name"
              placeholder="Имя пользователя"
              minLength="2"
              maxLength="30"
              value={values.name || ''} 
              pattern='^[a-zA-Zа-яА-ЯёЁ\s\-]+$'
              onChange={handleChanges} 
              required
            />
            <span className="info-form__item-error">{errors.name || ''}</span>
          </label>}
        <label className="info-form__item">
          E-mail
          <input 
            className="info-form__item-input"
            type="email"
            name="email"
            placeholder="Email"
            value={values.email || ''}
            pattern='^.+@.+\..+$'
            onChange={handleChanges} 
            required
          />
          <span className="info-form__item-error">{errors.email || ''}</span>
        </label>
        <label className="info-form__item">
          Пароль
          <input 
            className="info-form__item-input"
            type="password"
            name="password" 
            minLength="6" 
            maxLength="12" 
            pattern='.{6,12}'
            placeholder="Пароль" 
            value={values.password || ''} 
            onChange={handleChanges} 
            required 
          />
          <span className="info-form__item-error">{errors.password || ''}</span>
        </label>
      </fieldset>
      <span className="info-form__error">{errorMessage}</span>
      <button 
        type="submit" 
        className={`info-form__submit-button ${!isValid ? 'info-form__submit-button_disabled' : ''}`} 
        disabled={!isValid}>
          {buttonText}
      </button>
      {children}
    </form>
  )
}

export default UserInfoForm;