import React from 'react';

import nike from '../../images/nike.png';
import pattern from '../../images/pattern2.png';
import buttonStyle from '../Banner/Banner.module.css';

import styles from '../Deal/Deal.module.css';

const Deal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pattern}>
        <img src={pattern} alt='pattern' />
      </div>

      <div className={styles.text}>
        <span className={styles.header}>deal of the week</span>
        <p className={styles.description}>
          The legendary Jordan 1 started it all. Shop Air Jordan 1 in retro
          high, mid and low options in a variety of colorways. Available now at
          C-Store.
        </p>

        <div className={styles['old-cost-container']}>
          <span className={`${styles.cost} ${styles.old}`}>$295.00</span>
        </div>

        <div className={styles['cost-container']}>
          <span className={styles.cost}>$195.00</span>
          <span className={styles.pair}>/pair</span>
        </div>

        <div className={styles['time-wrapper']}>
          <div className={styles['time-container']}>
            <div className={styles.item}>
              <div className={`${styles.day} ${styles.circle}`}>
                <span className={styles.content}>08</span>
              </div>
              <div className={styles.name}>Days</div>
            </div>

            <div className={styles.item}>
              <div className={`${styles.day} ${styles.circle}`}>
                <span className={styles.content}>02</span>
              </div>
              <div className={styles.name}>Hours</div>
            </div>
            <div className={styles.item}>
              <div className={`${styles.minute} ${styles.circle}`}>
                <span className={styles.content}>35</span>
              </div>
              <div className={styles.name}>Mins</div>
            </div>

            <div className={styles.item}>
              <div className={`${styles.second} ${styles.circle}`}>
                <span className={styles.content}>22 </span>
              </div>
              <div className={styles.name}>Secs</div>
            </div>
          </div>
        </div>

        <div className={styles['btn-container']}>
          <button className={styles['shop-btn']}>Shop now</button>
        </div>
      </div>

      <div className={styles['img-container']}>
        <img src={nike} alt='nike' />
      </div>
    </div>
  );
};

export default Deal;
