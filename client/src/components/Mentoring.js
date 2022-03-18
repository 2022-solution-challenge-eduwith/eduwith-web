import React, { useState } from "react";
import Navbar from "./Navbar";
import styles from "./Mentoring.module.css";
import pin from '../images/pin.jpg';
import MentoApply from "./MentoApply";

let mento = ['수정이', '수룡이'];

function Mentoring() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(current => !current);
  };

  
  return (
    <div>
      <Navbar />
      <div className={styles.back}>
      <div className={styles.Title}>
        온라인 멘토 찾기
      </div>


      <div className={styles.search}>
        <div className={styles.cn1}>
          <div>
            <form method="get" action="#" className={styles.subject}>
              <h2>분야</h2>
              <label><input type="checkbox" name="category" defaultValue="어학" /> 어학</label>
              <label><input type="checkbox" name="category" defaultValue="컴퓨터" /> 컴퓨터</label>            
              <label><input type="checkbox" name="category" defaultValue="학습" /> 학습</label>            
              <label><input type="checkbox" name="category" defaultValue="예체능" /> 예체능</label>
              <label><input type="checkbox" name="category" defaultValue="기타" /> 기타</label>
            </form>
          </div>
          
          <div className={styles.subject}>
            <h2>대상</h2>
            <select name="age" className={styles.selectbox1}>
              <option value="전체">전체</option>
              <option value="유아초등">유아·초등</option>
              <option value="청소년">청소년</option>
              <option value="성인">성인</option>
            </select>
          </div>
        </div>

      <div className={styles.cn1}>
        <div className={styles.subject}>
          <h2>사용 언어</h2>
          <select name="language" className={styles.selectbox2}>
            <option value="">language</option>
            <option value="korean">Korean</option>
            <option value="english">English</option>
          </select>
        </div>

        <div>
          <form method="get" action="#" className={styles.subject}>
            <h2>강의 방식</h2>
            <label><input type="checkbox" name="how" defaultValue="일대일" /> 일대일</label>
            <label><input type="checkbox" name="how" defaultValue="그룹수업" /> 그룹수업</label>
          </form>
        </div>
      </div>

        <div>
         <form method="get" action="#" className={styles.subject}>
            <h2>멘토링 기간</h2>
            <label className={styles.date}><input type="date" name="date" defaultValue="start" /></label>
            <span>~</span>
            <label  className={styles.date}><input type="date" name="date" defaultValue="end" /></label>
          </form>
        </div>

        <div className={styles.scBtn}>검색</div>

      </div>

      <div className={styles.group}>
        {mento.map((name) => (
           <div className={styles.mento} key={name}>
            <img className={styles.pic} src={pin} alt="mentopic" />
            <div className={styles.title}>멘토링 제목</div>
            <div className={styles.btn} onClick={togglePopup}>신청</div>
            
            <div className={styles.box}>멘토 <b>{name}</b></div>
            <div className={styles.box}>분야 </div>
            <div className={styles.box2}>소개 </div>
          </div>
        ))}
        
        {showPopup && (
              <MentoApply togglePopup={togglePopup} />
            )}
      </div>
      </div>
    </div>

  );
}

export default Mentoring;