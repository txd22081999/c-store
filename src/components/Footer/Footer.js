import React from 'react';
import styles from './Footer.module.css';

import background from '../../images/background.png';
import pattern from '../../images/pattern3.png';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src={background} alt='background' />
        <img src={background} alt='background' />
      </div>
      <div className={styles.overlay}>
        <img src={pattern} alt='pattern' />
      </div>

      <div className={styles['grid-container']}>
        <div className={styles['address-container']}>
          <h3 className={styles['brand-name']}>C-Store</h3>
          <span className={styles.address}>
            Address: 876/37 Cach mang thang 8, Dist 5, Ho Chi Minh City
          </span>
          <span className={styles.phone}>Phone: 0943176152</span>
          <span className={styles.email}>Email: txd22081999@gmail.com</span>
        </div>

        <div className={styles['info-container']}>
          <div className={styles['header-wrapper']}>
            <h4 className={styles.header}>information</h4>
          </div>
          <a
            className={styles.about}
            href='#'
            onClick={() => window.open('/about', '_self')}
          >
            About us
          </a>
          <a
            href='#'
            className={styles.contact}
            onClick={() => window.open('/contact', '_self')}
          >
            Contact
          </a>
          <a href='#' className={styles.service}>
            Service
          </a>
        </div>

        <div className={styles['account-container']}>
          <div className={styles['header-wrapper']}>
            <h4 className={styles.header}>Account</h4>
          </div>
          <a href='#' className={styles.account}>
            My Account
          </a>
          <a href='#' className={styles.cart}>
            Shopping cart
          </a>
          <a href='#' className={styles.shop}>
            Shop
          </a>
        </div>

        <div className={styles['email-container']}>
          <div className={styles['header-wrapper']}>
            <h4 className={styles.header}>Join us now</h4>
          </div>
          <span className={styles.description}>
            Get updates about our latest products and special offers instantly
          </span>
          <div className={styles['input-container']}>
            <div
              className={styles.input}
              contentEditable='true'
              onBlur='scrollBack(this)'
            />
            <button className={styles.btn}>subcribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

function scrollBack(el) {
  el.scrollLeft = 0;
}

export default Footer;
