import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

let navbar;
let banner;
let productList;
let contact;
let about;

// Refs
let homeRef = React.createRef();
let productRef = React.createRef();
let aboutRef = React.createRef();
let contactRef = React.createRef();

// Button elements
let homeBtn;
let productBtn;
let aboutBtn;
let contactBtn;
let line;
let search;
let input;
// let lineWidth = 10;

// Buttons width
let homeWidth;
let productWidth;
let aboutWidth;
let contactWidth;

// console.log('Asd');

const Navbar = () => {
  const [lineWidth, setLineWidth] = useState(0);
  const [lineOffset, setLineOffset] = useState(0);

  useEffect(() => {
    navbar = document.querySelector('#navbar-container');
    banner = document.querySelector('#banner');
    productList = document.querySelector('#product-list');
    contact = document.querySelector('#contact-container');
    about = document.querySelector('#about-container');

    // Nav links
    homeBtn = document.querySelector(`#${styles.home}`);
    productBtn = document.querySelector(`#${styles.product}`);
    aboutBtn = document.querySelector(`#${styles.about}`);
    contactBtn = document.querySelector(`#${styles.contact}`);
    line = document.querySelector(`#${styles.line}`);
    search = document.querySelector(`#${styles['search-btn']}`);
    input = document.querySelector(`#${styles['input-field']}`);

    search.addEventListener('click', () => {
      console.log(input);
    });

    // Width of nav link
    homeWidth = homeRef.current.offsetWidth;
    productWidth = productRef.current.offsetWidth;
    aboutWidth = aboutRef.current.offsetWidth;
    contactWidth = contactRef.current.offsetWidth;

    // Add events
    homeBtn.addEventListener('mouseover', (e) => stretch('home'));
    homeBtn.addEventListener('mouseleave', (e) => shrink('home'));
    homeBtn.addEventListener('click', (e) => {
      console.log('OPEN');
      window.open('/home', '_self');
    });

    productBtn.addEventListener('mouseover', (e) => stretch('product'));
    productBtn.addEventListener('mouseleave', (e) => shrink('product'));
    productBtn.addEventListener('click', (e) => {
      console.log('OPEN');
      window.open('/products', '_self');
    });

    aboutBtn.addEventListener('mouseover', (e) => stretch('about'));
    aboutBtn.addEventListener('mouseleave', (e) => shrink('about'));
    aboutBtn.addEventListener('click', (e) => {
      console.log('OPEN');
      window.open('/about', '_self');
    });

    contactBtn.addEventListener('mouseover', (e) => stretch('contact'));
    contactBtn.addEventListener('mouseleave', (e) => shrink('contact'));
    contactBtn.addEventListener('click', (e) => {
      console.log('OPEN');
      window.open('/contact', '_self');
    });

    window.addEventListener('scroll', () => {
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

      if (contact) {
        if (window.scrollY > 100) {
          contact.style.marginTop = '4em';
        } else {
          contact.style.marginTop = '0em';
        }
      }

      if (about) {
        if (window.scrollY > 100) {
          about.style.marginTop = '4em';
        } else {
          about.style.marginTop = '0em';
        }
      }
    });
  }, []);

  const stretch = (el) => {
    if (el === 'home') {
      setLineWidth(homeWidth);
      setLineOffset(homeRef.current.offsetLeft);
    }
    if (el === 'product') {
      setLineWidth(productWidth);
      setLineOffset(productRef.current.offsetLeft);
    }

    if (el === 'about') {
      setLineWidth(aboutWidth);
      setLineOffset(aboutRef.current.offsetLeft);
    }
    if (el === 'contact') {
      setLineWidth(contactWidth);
      setLineOffset(contactRef.current.offsetLeft);
    }
  };

  const shrink = (el) => {
    setLineWidth(0);
  };

  return (
    <div className={styles.container} id='navbar-container'>
      {/* <p className={styles['brand-name']}>C-Store</p> */}
      <div className={styles['brand-container']}>
        <span className={styles['brand-name']}>C-Store</span>
      </div>

      <div className={styles.navbar}>
        <ul>
          <li className={styles.link} id={styles.home} ref={homeRef}>
            <a href='#'>Home</a>
          </li>

          <li className={styles.link} id={styles.product} ref={productRef}>
            <a href='#'>Products</a>
            <div className={styles['icon-dropdown']}>
              <i
                className='icon fa fa-sort-desc dropdown-icon'
                aria-hidden='true'
              ></i>
            </div>
          </li>

          <li className={styles.link} id={styles.about} ref={aboutRef}>
            <a href='#'>About</a>
          </li>

          <li className={styles.link} id={styles.contact} ref={contactRef}>
            <a href='#'>Contact</a>
          </li>
        </ul>

        <div className={styles['line-wrapper']}>
          <div
            id={styles.line}
            style={{ width: `${lineWidth}px`, left: `${lineOffset}px` }}
          ></div>
        </div>
      </div>

      <div className={styles['option-container']}>
        <div className={styles.options}>
          <div className={styles['input-box']} id={styles['input-field']}>
            <div
              className={styles.input}
              contentEditable='true'
              onBlur='scrollBack(this)'
            />
          </div>
          <div className={styles.search} id={styles['search-btn']}>
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
