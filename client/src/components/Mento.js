import React from "react";
import styles from "./Mento.module.css";
import pic1 from '../images/pic1.jpg';

let category = ['어학', 'IT', '학습', "예체능", "기타"];
let cards = ['수정이', '수룡이', '성신이'];

function Mento() {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.title}>나에게 맞는 멘토</div>
        <div className={styles.menu}>
          <ul>
            {category.map((item) =>(
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.btn}>멘토 신청하기 {">"}</div>
      </div>

      <div className={styles.middle}>
      <div className={styles.detailBtn}>view detail {">"}</div>
      {cards.map((item) => (
        <div className={styles.card} key={item}>
          <img className={styles.pic1} src={pic1} alt="프로필" />
          <div>{item}</div>
        </div>
      ))}
      
      </div>
    </div>
  );
}

export default Mento;