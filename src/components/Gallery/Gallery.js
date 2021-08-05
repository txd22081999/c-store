import React from 'react'
import styles from './Gallery.module.css'

const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <img src={'/images/g1.png'} alt='model' />
      </div>
      <div className={styles.item2}>
        <img src={'/images/g2.png'} alt='model' />
      </div>
      <div className={styles.item3}>
        <img src={'/images/g3.png'} alt='model' />
      </div>
      <div className={styles.item4}>
        <img src={'/images/g4.png'} alt='model' />
      </div>
      <div className={styles.item5}>
        <img src={'/images/g5.png'} alt='model' />
      </div>
      <div className={styles.item6}>
        <img src={'/images/g6.png'} alt='model' />
      </div>
      <div className={styles.item7}>
        <img src={'/images/g7.png'} alt='model' />
      </div>
    </div>
  )
}

export default Gallery
