import React from 'react'
import styles from './Category.module.css'

const Category = ({ history }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} ${styles.men}`}>
        <div className={styles.btn} onClick={() => history.push('/products')}>
          <span>Men's</span>
        </div>

        <div className={styles['model-container']}>
          <img className={styles.model} src={'/images/1.png'} alt='man model' />
        </div>

        <div className={styles.pattern}>
          <img src={'/images/pattern.png'} alt='' />
        </div>
      </div>

      <div className={`${styles.wrapper} ${styles.women}`}>
        <div className={styles.btn} onClick={() => history.push('/products')}>
          <span>Women's</span>
        </div>

        <div className={styles['model-container']}>
          <img className={styles.model} src={'/images/2.png'} alt='man model' />
        </div>

        <div className={styles.pattern}>
          <img src={'/images/pattern.png'} alt='' />
        </div>
      </div>

      <div className={`${styles.wrapper} ${styles.kid}`}>
        <div className={styles.btn} onClick={() => history.push('/products')}>
          <span>Kid's</span>
        </div>

        <div className={styles['model-container']}>
          <img className={styles.model} src={'/images/3.png'} alt='kid model' />
        </div>

        <div className={styles.pattern}>
          <img src={'/images/pattern.png'} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Category
