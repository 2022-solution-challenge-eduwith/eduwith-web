import React from "react";
import Navbar from "./Navbar";
import styles from "./Home.module.css";
import fox from '../images/fox.png';
import Mento from "./Mento";

function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <img className={styles.imgFox} src={fox} alt="여우" />
      </div>
      <Mento />
    </div>
  );
}

export default Home;