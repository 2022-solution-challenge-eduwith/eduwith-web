import React, { useState } from 'react';
import styled from "styled-components";
import styles from "./Main.module.css";
import mic from "./image/mic.png"
import text from "./image/text.png"
import youtube from "./image/youtube.png"
import { MdChat, MdHeadphones, MdPeopleAlt } from 'react-icons/md';
import {ImBook} from 'react-icons/im';

let vex = [[mic, "책 녹음하기"], [text, "자료 번역"], [youtube, "강의자막"]];

function Main({ children }) {
    const [loginToggle, setLoginToggle] = useState(false);

    const onLoginToggle = () => {
        setLoginToggle(prev => !prev)
    };
    return(
        <div className={styles.wrap}>
            <div style={styles.vwrap}>
            <div className={styles.vbox}>
                <div className={styles.vtitle}>함께하는 자원봉사</div>
                <button className={styles.vbtn}>view detail</button>
                <div className={styles.vexbox}>
                    {vex.map((item)=>
                    (
                        <div className={styles.vex} key={item}>
                            <img src={item[0]}/>
                            <h3>{item[1]}</h3>
                            <p>ddddddddddd</p>
                            <button >신청하러 가기 ></button>
                        </div>
                    ))}
                    {/* <div className={styles.vex1}>
                        <img src={mic}></img>
                        <h3>책 녹음하기</h3>
                        <p>ddddddddddd</p>
                        <button >신청하러 가기 ></button>
                    </div>
                    <div className={styles.vex2}>
                        <img src={text}></img>
                        <h3>자료 번역</h3>
                        <p>ddddddddddd</p>
                        <button>신청하러 가기 ></button>
                    </div>
                    <div className={styles.vex3}>
                        <img src={youtube}></img>
                        <h3>강의자막</h3>
                        <p>ddddddddddd</p>
                        <button>신청하러 가기 ></button>
                    </div> */}
                </div>
            </div>
            </div>
            
            <div className={styles.lbox}>
                <div className={styles.ltitle}>Online-Library</div>
                <button className={styles.lbtn}>view detail</button>
                <div >
                    <ImBook/>
                    <h4>학습자료</h4>
                </div>
                <div >
                    <MdHeadphones/>
                    <h4>오디오북</h4>
                </div>
                <div >
                    <MdPeopleAlt/>
                    <h4>독서모임</h4>
                </div>
                <div >
                    <MdChat/>
                    <h4>자유게시판</h4>
                </div>
            </div>
        </div>
    );
  }
  
  export default Main;
