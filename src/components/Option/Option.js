import React, { useEffect, useState } from 'react';
import styles from './Option.module.css';
import { act } from 'react-dom/test-utils';
// import './Option.css';

let clotheBtn;
let bagBtn;
let hatBtn;
let shoesBtn;
let activeBtn;

let isMen;
let isWomen;
let isKid;

const Option = (props) => {
  // #${containerId}
  const [defaultActiveMen, setDefaultActiveMen] = useState(true);
  const [defaultActiveWomen, setDefaultActiveWomen] = useState(true);
  const [defaultActiveKid, setDefaultActiveKid] = useState(true);

  let id;
  id = props.containerId;

  useEffect(() => {
    isMen = id.includes('id1');
    isWomen = id.includes('id2');
    isKid = id.includes('id3');

    clotheBtn = document.querySelector(`#${id} #${styles.clothing}`);
    bagBtn = document.querySelector(`#${id} #${styles.handbag}`);
    shoesBtn = document.querySelector(`#${id} #${styles.shoes}`);
    hatBtn = document.querySelector(`#${id} #${styles.hat}`);

    activeBtn = document.querySelector(`#${id} .${styles.active}`);

    clotheBtn.addEventListener('click', (e) => {
      changeSelected(e);
      if (isMen) {
        props.renderClothes();
      }
      if (isWomen) {
        props.renderWomenClothes();
      }
      if (isKid) {
        props.renderKidClothes();
      }
    });

    bagBtn.addEventListener('click', (e) => {
      changeSelected(e);
      props.renderBag();
    });

    hatBtn.addEventListener('click', (e) => {
      changeSelected(e);
      props.renderHat();
    });

    shoesBtn.addEventListener('click', (e) => {
      changeSelected(e);
      props.renderShoes();
    });
  }, [defaultActiveMen, defaultActiveWomen]);

  const changeSelected = (e) => {
    activeBtn.classList.toggle(`${styles.active}`);

    e.target.classList.toggle(`${styles.active}`);

    activeBtn = document.querySelector(`#${id} .${styles.active}`);

    /* Reset default active button of each section */
    if (id.includes('id1') && defaultActiveMen == true) {
      setDefaultActiveMen(false);
    }
    if (id.includes('id2') && defaultActiveWomen == true) {
      setDefaultActiveWomen(false);
    }

    if (id.includes('id3') && defaultActiveKid == true) {
      setDefaultActiveKid(false);
    }
  };

  const getActiveClass = (id) => {
    // console.log('in func');
    // console.log(id.includes('men'));
    if (id.includes('id1')) {
      if (defaultActiveMen) {
        return `${styles.btn} ${styles.active}`;
      } else {
        return `${styles.btn}`;
      }
    }

    if (id.includes('id2')) {
      if (defaultActiveWomen) {
        return `${styles.btn} ${styles.active}`;
      } else {
        return `${styles.btn}`;
      }
    }

    if (id.includes('id3')) {
      if (defaultActiveKid) {
        return `${styles.btn} ${styles.active}`;
      } else {
        return `${styles.btn}`;
      }
    }
  };

  let activeClassName = getActiveClass(id);

  return (
    <div className={styles.container} id={id}>
      {/* (defaultActiveMen ? `${styles.btn} ${styles.active}` : `${styles.btn}`)
       (defaultActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`) */}

      <div className={`${activeClassName}`} id={styles.clothing}>
        Clothings
      </div>
      <div className={styles.btn} id={styles.handbag}>
        HandBag
      </div>
      <div className={styles.btn} id={styles.shoes}>
        Shoes
      </div>
      <div className={styles.btn} id={styles.hat}>
        Hat
      </div>
    </div>
  );
};

export default Option;
