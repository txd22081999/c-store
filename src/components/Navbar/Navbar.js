import React, { useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navbar = document.querySelector('#navbar-container');
      let banner = document.querySelector('#banner');
      let productList = document.querySelector('#product-list');
      navbar.classList.toggle(`${styles.sticky}`, window.scrollY > 100);
      if (banner) {
        if (window.scrollY > 100) {
          banner.style.marginTop = '6em';
        } else {
          banner.style.marginTop = '2em';
        }
      }

      if (productList) {
        if (window.scrollY > 100) {
          productList.style.marginTop = '6em';
        } else {
          productList.style.marginTop = '2em';
        }
      }
    });
  }, []);

  return (
    <div className={styles.container} id='navbar-container'>
      {/* <p className={styles['brand-name']}>C-Store</p> */}
      <div className={styles['brand-container']}>
        <span className={styles['brand-name']}>C-Store</span>
      </div>

      <div className={styles.navbar}>
        <ul>
          <li className={styles.link}>
            <a href='#'>Home</a>
          </li>
          <li className={styles.link}>
            <a href='#'>Products</a>
            <div className={styles['icon-dropdown']}>
              <i
                className='icon fa fa-sort-desc dropdown-icon'
                aria-hidden='true'
              ></i>
            </div>
          </li>
          <li className={styles.link}>
            <a href='#'>About</a>
          </li>
          <li className={styles.link}>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>

      <div className={styles['option-container']}>
        <div className={styles.options}>
          <div className={styles['input-box']}>
            <div
              className={styles.input}
              contentEditable='true'
              onBlur='scrollBack(this)'
            />
          </div>
          <div className={styles.search}>
            <i className={`${styles.icon} fa fa-search`} aria-hidden='true'></i>
          </div>

          <div className={styles.cart}>
            <i
              className={`${styles.icon} fa fa-shopping-cart`}
              aria-hidden='true'
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

function scrollBack(el) {
  el.scrollLeft = 0;
}
