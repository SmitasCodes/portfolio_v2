import React from "react";
import styles from "./Animation.module.css";

// Animation for landing section background
const Animation = () => {
  return (
    <div className={styles.background}>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
    </div>
  );
};

export default Animation;