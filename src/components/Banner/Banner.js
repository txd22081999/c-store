import React from 'react'

import styles from './Banner.module.css'

const Banner = ({ history }) => {
  return (
    <div className={styles.container} id='banner'>
      <div className={styles['woman-img-container']}>
        <img
          className={styles.model}
          src={'/images/woman.png'}
          alt='woman model'
        />
      </div>

      <div className={styles.text}>
        <p className={styles.header}>Best quality clothes</p>
        <p className={styles.description}>
          From professional to casual to tough and trail-ready,
        </p>
        <p className={styles.description}>
          let’s build a wardrobe that’s always got your back.
        </p>
        <button
          className={styles['shop-btn']}
          onClick={() => history.push('/products')}
        >
          Shop now
        </button>
      </div>

      <div className={styles['man-img-container']}>
        <img className={styles.model} src={'/images/man.png'} alt='man model' />
      </div>
    </div>
  )
}

export default Banner
