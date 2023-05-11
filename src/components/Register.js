import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  //const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // здесь обработчик регистрации
  };

  return (
    <div className="auth">
      <form onSubmit={handleSubmit} className="auth__form">
        <h2 className="auth__heading">{props.title}</h2>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="auth__imput"
          value={formValue.email}
          onChange={handleChange}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          className="auth__imput"
          value={formValue.password}
          onChange={handleChange}
        />
        <button type="submit" onSubmit={handleSubmit} className="auth__button">
          {props.buttonText}
        </button>
        <div className="auth__sign-up">
          <p className="auth__sign-ip-text">
            Уже зарегистрированы?{" "}
            <Link to="/sign-in" className="auth__login-link">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
