import React from "react";
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
        <div className={styles.logo}>
          <Link to="/">EduWith</Link>
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            로그인
          </li>

          <li className={styles.navItem}>
            회원가입
          </li>

          <li  className={styles.navItem}>
            <Link to="/Mypage" style={{textDecoration: 'none'}} >마이페이지</Link>
          </li>
        </ul>
    </nav>
    <nav className={styles.subvar}>
      <ul className={styles.subLinks}>
        <li><NavLink to="/Mentoring" style={({ isActive }) => isActive ? activeStyle : undefined } className={styles.link}> Mentoring</NavLink></li>
        <li><NavLink to="/Volunteer" style={({ isActive }) => isActive ? activeStyle : undefined } className={styles.link}> Volunteer</NavLink></li>
        <li><NavLink to="/Library" style={({ isActive }) => isActive ? activeStyle : undefined } className={styles.link}>Electronic Library</NavLink></li>
        <li><NavLink to="/Guide" style={({ isActive }) => isActive ? activeStyle : undefined } className={styles.link}>User Guide</NavLink></li>
      </ul>
    </nav>
  </div>

  );
}

export default Navbar;