import React from "react";

function Login(props) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(formValue.email, formValue.password)
  };

  return (
    <div className="auth">
      <form
        onSubmit={handleSubmit}
        className="auth__form">
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
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="auth__button"
          >
            {props.buttonText}
          </button>
      </form>
    </div>
  );
}

export default Login;