import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import s from "./Footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <a href="/" className={s.logo_group}>
        <FaHandsHelping className={s.logo} />
        <span className={s.logo_title}>HELPS</span>
      </a>
    </footer>
  );
}

export default Footer;
