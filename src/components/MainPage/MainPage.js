import React, { useState } from "react";
import AuthForm from "../Auth/AuthForm/AuthForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser } from "../../components/redux/auth/authSlice";
import s from "./MainPage.module.css";
import hero from "../../images/hero.png";
import ContactsPage from "../ContactsPage/ContactsPage";

function MainPage() {
  const dispatch = useDispatch();
  let isUser = useSelector(selectUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (curUser) => {
    // setUser(curUser);
    dispatch(getUser(curUser));
  });

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e.message);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser({});
  };

  return (
    <div className={s.main}>
      {isUser ? (
        <ContactsPage />
      ) : (
        <ul className={s.list_group}>
          <li className={s.item}>
            <div className={s.hero}>
              <h1 className={s.hero_title}>
                <span className={s.logo_color}>HELPS</span> - це <b>ТВІЙ</b>{" "}
                помічник в<br />
                надзвичайних ситуаціях!
              </h1>
              <p>Ми - це сервіс з телефонами майстрів у ТВОЕМУ місті.</p>
              <ul className={s.list}>
                <li className={s.list_describe}>
                  <span className={s.articles}>
                    Якщо у тебе прорвало трубу?
                  </span>
                </li>
                <li className={s.list_describe}>
                  <span className={s.articles}>Чи пропало світло?</span>
                </li>
                <li className={s.list_describe}>
                  Або
                  <span className={s.articles}> перестав працювати котел?</span>
                </li>
                <li className={s.list_describe}>
                  І ти не знаешь як це вирішити?
                </li>
                <li className={s.list_describe}>Тоді тобі до нас!</li>
              </ul>
              <img src={hero} alt="people" width="400px" />
            </div>
          </li>
          <li>
            <AuthForm
              setEmail={setEmail}
              setPassword={setPassword}
              register={register}
              login={login}
            />
          </li>
        </ul>
      )}
    </div>
  );
}

export default MainPage;
