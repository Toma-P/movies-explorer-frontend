import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import UserInfoForm from "../UserInfoForm/UserInfoForm";

function Login() {
    return (
      <main className="content">
        <section className="login">
          <Logo />
          <h1 className="login__title">Рады видеть!</h1>
          <UserInfoForm buttonText={"Войти"}>
            <p className="info-form__question">Ещё не зарегистрированы?<Link className="info-form__question-link" to="/signup">Регистрация</Link></p>
          </UserInfoForm>
        </section>
      </main>
    )
  }
  
  export default Login;