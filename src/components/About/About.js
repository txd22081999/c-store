import React from 'react';
// import './About.css';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container} id='about-container'>
      <div className={styles.wrapper}>
        <div className={styles.overlay}></div>

        <div className={styles['text-container']}>
          <h3 className={styles.header}>Our mission</h3>

          <p className={styles['sub-header']}>
            to provide the most valuable products.
          </p>

          <p className={styles.text}>
            We started off as a very small business. We believe that everyone
            needs high quality accessories for their daily activity. Our
            products are careful chosen from top clothing brands. We also have
            fashion specialist that can prove the product quality before
            starting selling. You can get comfortable and fashionable at the
            same time. Through many occasion in a year, we provide you countless
            sale event with a reasonable price.
          </p>
          <p className={styles.text}>Thank you so much for choosing us ...</p>
        </div>
      </div>
    </div>
  );
};

export default About;
