import React from "react";
import s from "./Header.module.css";
import { FaHandsHelping } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getUser, selectUser } from "../../components/redux/auth/authSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { FiLogOut } from "react-icons/fi";

function Header({ user }) {
  let emailName = useSelector(selectUser);
  console.log("Header ~ emailName", emailName);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className={s.container}>
      <header className={s.header}>
        <a href="/" className={s.logo_group}>
          <FaHandsHelping className={s.logo} />
          <span className={s.logo_title}>HELPS</span>
        </a>

        {emailName && (
          <div style={{ display: "flex" }}>
            <div className={s.user_group}>
              <p>{emailName?.email}</p>
            </div>

            <div className={s.logout_group} onClick={logout}>
              <FiLogOut className={s.logout} />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;

// <img
//   width="30px"
//   alt="logo"
//   src="https://toppng.com/uploads/preview/design-for-logo-11549988276bxsuzsd1y1.png     "
// ></img>;
