import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import UserInfoForm from "../UserInfoForm/UserInfoForm";

function Login() {
    return (
      <section className="login">
        <Logo />
        <h2 className="login__title">Рады видеть!</h2>
        <UserInfoForm buttonText={"Войти"}>
          <p className="info-form__question">Ещё не зарегистрированы?<Link className="info-form__question-link" to="/signup">Регистрация</Link></p>
        </UserInfoForm>
      </section>
    )
  }
  
  export default Login;