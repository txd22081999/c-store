import React from 'react';
import styles from './Option.module.css';
// import './Option.css';

const Option = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.btn} ${styles.clothing} ${styles.active}`}>
        Clothings
      </div>
      <div className={`${styles.btn} ${styles.handbag}`}>HandBag</div>
      <div className={`${styles.btn} ${styles.shoes}`}>Shoes</div>
      <div className={`${styles.btn} ${styles.hat}`}>Hat</div>
    </div>
  );
};

export default Option;
