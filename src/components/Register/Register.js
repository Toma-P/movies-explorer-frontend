import { Link } from "react-router-dom";
import React from 'react';
import Logo from "../Logo/Logo";
import UserInfoForm from "../UserInfoForm/UserInfoForm";

function Register({onRegister, errorMessage, resetErrorMessages}) {
  React.useEffect(() => {
    return resetErrorMessages();
  }, [])

  return (
    <main className="content">
      <section className="register">
        <Logo />
        <h1 className="register__title">Добро пожаловать!</h1>
        <UserInfoForm 
          buttonText={"Зарегистрироваться"}
          onSubmit={onRegister}
          errorMessage={errorMessage}
        >
          <p 
            className="info-form__question">
              Уже зарегистрированы?
              <Link className="info-form__question-link" 
                to="/signin">
                  Войти
              </Link>
          </p>
        </UserInfoForm>
      </section>
    </main>
  )
}

export default Register;