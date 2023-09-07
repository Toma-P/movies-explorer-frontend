import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Profile() {
const name = "Виталий";
const email = "pochta@yandex.ru"
const readOnly = true;

  return(
    <>
      <Header />
      <section className="account">
        <h2 className="account__title">Привет, {name}!</h2>
        <form className="account__form">
          <label className="account__form-label">
            Имя
            <input type="text" className="account__form-input" defaultValue={name} />
          </label>
          <label className="account__form-label">
            E-mail
            <input type="email" className="account__form-input account__form-input_type_latest" defaultValue={email} />
          </label>
          {readOnly 
            ? <>
                <button type="button" className="account__form-button">Редактировать</button>
                <Link className="account__exit-link" to="/">Выйти из аккаунта</Link>
              </>
            : <button type="submit" className="account__submit-button account__submit-button_disabled" >Сохранить</button>}
          
        </form>
        
      </section>
    </>
  )
}

export default Profile;
