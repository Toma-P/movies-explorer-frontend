import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import UserInfoForm from "../UserInfoForm/UserInfoForm";

function Register() {
  return (
    <section className="register">
      <Logo />
      <h2 className="register__title">Добро пожаловать!</h2>
      <UserInfoForm buttonText={"Зарегистрироваться"}>
        <p className="info-form__question">Уже зарегистрированы?<Link className="info-form__question-link" to="/signin">Войти</Link></p>
      </UserInfoForm>
    </section>
  )
}

export default Register;