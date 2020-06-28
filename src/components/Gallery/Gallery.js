import React from 'react';
import styles from './Gallery.module.css';

import item1 from '../../images/g1.png';
import item2 from '../../images/g2.png';
import item3 from '../../images/g3.png';
import item4 from '../../images/g4.png';
import item5 from '../../images/g5.png';
import item6 from '../../images/g6.png';
import item7 from '../../images/g7.png';

const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <img src={item1} alt='model' />
      </div>
      <div className={styles.item2}>
        <img src={item2} alt='model' />
      </div>
      <div className={styles.item3}>
        <img src={item3} alt='model' />
      </div>
      <div className={styles.item4}>
        <img src={item4} alt='model' />
      </div>
      <div className={styles.item5}>
        <img src={item5} alt='model' />
      </div>
      <div className={styles.item6}>
        <img src={item6} alt='model' />
      </div>
      <div className={styles.item7}>
        <img src={item7} alt='model' />
      </div>
    </div>
  );
};

export default Gallery;
