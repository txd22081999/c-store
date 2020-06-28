import React, { useEffect } from 'react';
import styles from './Option.module.css';
import { act } from 'react-dom/test-utils';
// import './Option.css';

let clotheBtn;
let bagBtn;
let hatBtn;
let shoesBtn;
let activeBtn;

const Option = (props) => {
  // #${containerId}
  let id = props.containerId;

  useEffect(() => {
    clotheBtn = document.querySelector(`#${id} #${styles.clothing}`);
    bagBtn = document.querySelector(`#${id} #${styles.handbag}`);
    shoesBtn = document.querySelector(`#${id} #${styles.shoes}`);
    hatBtn = document.querySelector(`#${id} #${styles.hat}`);

    activeBtn = document.querySelector(`#${id} .${styles.active}`);

    clotheBtn.addEventListener('click', (e) => {
      changeSelected(e);
      props.renderClothes();
    });

    bagBtn.addEventListener('click', (e) => {
      changeSelected(e);
      props.renderBag();
    });

    // hatBtn.addEventListener('click', (e) => {
    //   changeSelected(e);
    //   props.renderShoes();
    // });

    hatBtn.addEventListener('click', (e) => {
      changeSelected(e);
      // props.renderShoes();
    });
    shoesBtn.addEventListener('click', (e) => {
      changeSelected(e);
      props.renderShoes();
    });
  });

  const changeSelected = (e) => {
    e.target.classList.toggle(`${styles.active}`);
    console.log(e.target);
    activeBtn.classList.toggle(`${styles.active}`);
    console.log(activeBtn);
    activeBtn = document.querySelector(`#${id} .${styles.active}`);
    console.log(activeBtn);
    // (`#${id} .${styles.active}`);
  };

  return (
    <div className={styles.container} id={id}>
      <div className={`${styles.btn} ${styles.active}`} id={styles.clothing}>
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
