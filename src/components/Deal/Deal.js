import React, { useEffect, useState } from 'react';

import nike from '../../images/nike.png';
import pattern from '../../images/pattern2.png';
import buttonStyle from '../Banner/Banner.module.css';

import styles from '../Deal/Deal.module.css';

let deadline = new Date('jun 30, 2020 23:59:59').getTime();
console.log(deadline);

let now, t, days, hours, minutes, seconds;

let dayEl;
let hourEl;
let minEl;
let secEl;

const Deal = () => {
  const [d, setD] = useState(0);
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);

  var setSecond = (value) => {
    setS(value);
  };

  useEffect(() => {
    let x = setInterval(function () {
      now = new Date().getTime();
      t = deadline - now;
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((t % (1000 * 60)) / 1000);
      setD(days);
      setH(hours);
      setM(minutes);
      setS(seconds);
      // setSecond(seconds);
      console.log(`${days} ${hours} ${minutes} ${seconds}`);
      if (t < 0) {
        clearInterval(x);
        console.log(`${hours} ${minutes} ${seconds}`);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    console.log('render');
    dayEl = document.querySelector(`#${styles.day}`);
    hourEl = document.querySelector(`#${styles.hour}`);
    minEl = document.querySelector(`#${styles.min}`);
    secEl = document.querySelector(`#${styles.sec}`);
    console.log(minEl);
    dayEl.textContent = d;
    hourEl.textContent = h;
    minEl.textContent = m;
    secEl.textContent = s;
  }, [s]);

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
              <div className={`${styles.circle}`}>
                <span className={styles.content} id={styles.day}>
                  00
                </span>
              </div>
              <div className={styles.name}>Days</div>
            </div>

            <div className={styles.item}>
              <div className={`${styles.circle}`}>
                <span className={styles.content} id={styles.hour}>
                  00
                </span>
              </div>
              <div className={styles.name}>Hours</div>
            </div>
            <div className={styles.item}>
              <div className={`${styles.circle}`}>
                <span className={styles.content} id={styles.min}>
                  00
                </span>
              </div>
              <div className={styles.name}>Mins</div>
            </div>

            <div className={styles.item}>
              <div className={`${styles.second} ${styles.circle}`}>
                <span className={styles.content} id={styles.sec}>
                  00
                </span>
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
