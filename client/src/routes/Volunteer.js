import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";
import styles from "./Volunteer.module.css";
import vimg from "./image/vimage.png";


let lists =[["오디오북 녹음하기", "대한한국", "2022.02.28~2022.03.06", "2022.03.07~2023.01.31", "5/10"], ["자료 번역하기", "대한한국", "2022.02.28~2022.03.06", "2022.03.07~2023.01.31", "5/10"], ["디지털 취약계층을 위한 강의", "대한한국", "2022.02.28~2022.03.06", "2022.03.07~2023.01.31", "5/10"], ["강의 자막 업로드", "대한한국", "2022.02.28~2022.03.06", "2022.03.07~2023.01.31", "5/10"]];
function Volunteer() {

    return(
        <div className={styles.wrap}>
            <div className={styles.vhead}>
                <div>
                    <div className={styles.vtitle}>Volunteer</div>
                    <div className={styles.vtext}>1년 365일 자원봉사하기 좋은 날</div>
                    <img className={styles.vimg} src={vimg}></img>
                </div>
            </div>
            
            <div className={styles.vlist}>
                <div>
                    <div className={styles.text}>목록보기 <hr /> </div>
                    {lists.map((item) =>
                    (
                        <div className={styles.listbox} key={item}>
                            <h4>{item[0]}</h4>
                            <button>모집중</button>
                            <div>[국가] {item[1]} &nbsp; [모집기간] {item[2]} &nbsp;  [봉사기간] {item[3]} &nbsp;  [신청인원] {item[4]}</div>
                        </div>
                    ))}
                </div>
                
            </div>

            <div className={styles.vbottom}><MdArrowBackIos/> 1 2 3 <MdArrowForwardIos/></div>
        </div>
        
    );
}

export default Volunteer;