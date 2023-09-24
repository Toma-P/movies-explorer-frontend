import React, {useState, useContext} from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from "../Header/Header";
import useFormValidate from '../../hooks/useFormValidate';

function Profile({onUpdateUser, signOut, loggedIn, updateMessage, resetUpdateMessages}) {
  const currentUser = useContext(CurrentUserContext);
  const [readOnly, setReadOnly] = useState(true);
  const { values, errors, isValid, resetForm, handleChanges } = useFormValidate();

  React.useEffect(() => {
    resetUpdateMessages();
  }, [values])

  React.useEffect(() => {
    if(currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [])

  const isActualValue = isValid &&
  (values.name !== currentUser.name || values.email !== currentUser.email);

  function handleEditForm() {
    setReadOnly(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setReadOnly(true);
    onUpdateUser(values);
  }

  return(
    <>
      <Header loggedIn={loggedIn}/>
      <main className="content">
        <section className="account">
          <h1 className="account__title">Привет, {currentUser.name}!</h1>
          <form className="account__form" onSubmit={handleSubmit}>
            <label className="account__form-label">
              Имя
              <input 
                type="text" 
                name="name"
                className="account__form-input" 
                value={values.name || ''} 
                minLength="2"
                maxLength="30"
                pattern='^[a-zA-Zа-яА-ЯёЁ\s\-]+$'
                onChange={handleChanges}
                disabled={readOnly}
                required
              />
              <span className="account-form__input-error">{errors.name || ''}</span>
            </label>
            <label className="account__form-label">
              E-mail
              <input 
                type="email" 
                name="email"
                className="account__form-input account__form-input_type_latest" 
                placeholder="example@test.com"
                value={values.email || ''} 
                pattern='^.+@.+\..+$'
                onChange={handleChanges}
                disabled={readOnly}
                required
              />
              <span className="account-form__input-error">{errors.email || ''}</span>
            </label>
            <span className="account-form__update-message">{updateMessage}</span>
            {readOnly 
              ? <>
                  <button 
                    type="button" 
                    className="account__form-button" 
                    onClick={handleEditForm}>
                      Редактировать
                  </button>
                  <button 
                    type="button" 
                    className="account__exit-button" 
                    onClick={signOut}>
                      Выйти из аккаунта
                  </button>
                </>
              : <button 
                  type="submit" 
                  className={`account__submit-button ${!isActualValue ? 'account__submit-button_disabled': ''}`} 
                  disabled={!isActualValue} >
                    Сохранить
                </button>}
          </form>
        </section>
      </main>
    </>
  )
}

export default Profile;
