import React, { useState } from "react";
import styles from "./Navbar.module.css";
import {NavLink, Link} from 'react-router-dom';

function Navbar() {

  const activeStyle = {
    textDecoration: 'none',
    borderBottom: '4px solid #4673EA',
    paddingBottom: '13px',
    fontWeight: 600,
    color:'#4673EA',
  };

  return (
    <div>
    <nav className={styles.navbar}>
        <div>
          EduWith
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            로그인
          </li>

          <li className={styles.navItem}>
            회원가입
          </li>

          <li className={styles.navItem}>
            마이페이지
          </li>
        </ul>
    </nav>
    <nav className={styles.subvar}>
      <ul className={styles.subLinks}>
        <li><NavLink to="/mentoring" activeStyle={activeStyle} className={styles.link}> Mentoring</NavLink></li>
        <li><NavLink to="/volunteer" activeStyle={activeStyle} className={styles.link}> Volunteer</NavLink></li>
        <li><NavLink to="/library" activeStyle={activeStyle} className={styles.link}>Electronic Library</NavLink></li>
        <li><NavLink to="/guide" activeStyle={activeStyle} className={styles.link}>User Guide</NavLink></li>
      </ul>
    </nav>
  </div>

  );
}

export default Navbar;