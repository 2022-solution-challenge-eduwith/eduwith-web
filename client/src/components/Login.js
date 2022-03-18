import React from 'react';
import styled from "styled-components";
import styles from "./Login.module.css"
import {MdClose} from "react-icons/md";


function Login({ onLoginToggle }) {

    return (
        <div>
            <div className={styles.back} onClick={onLoginToggle}></div>
            <form className={styles.loginbox}>
                <div className={styles.logo}>EDUWITH</div>
                <div className={styles.text}>Login</div>
                <MdClose size={50} color="#5D6466" className={styles.icon}/>
                <input
                    className={styles.id}
                    type="text" placeholder='이메일 주소'
                />
                <input
                    className={styles.pw}
                    type="password" placeholder="비밀번호"
                />
                <div className={styles.findpw}>비밀번호를 잊어버리셨나요?</div>
                <div className={styles.sign}>join us</div>
                <button className={styles.lbtn} type="submit">
                    LOGIN
                </button>
            </form>
        </div>
    );
}

export default Login;