import React from 'react';
import styles from '../Navbar/Navbar.module.css';

const Test = () => {
  return (
    <div>
      <p className={`${styles['brand-name']} ${styles.bold}`}>test</p>
    </div>
  );
};

export default Test;
