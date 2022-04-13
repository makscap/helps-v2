import React from "react";
import s from "./AuthForm.module.css";
import { FaHandsHelping } from "react-icons/fa";

function AuthForm({ setEmail, setPassword, register, login }) {
  return (
    <div className={s.form_container}>
      <form className={s.form}>
        <a href="/" className={s.logo_group}>
          <FaHandsHelping className={s.logo} />
          <span className={s.logo_title}>HELPS</span>
        </a>
        <input
          placeholder="E-mail..."
          className={s.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password..."
          className={s.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className={s.warning}>*This field cannot be empty</p>
        <div className={s.btn_group}>
          <button className={s.btn} onClick={login}>
            LOGIN
          </button>
          <button className={s.btn} onClick={register}>
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
