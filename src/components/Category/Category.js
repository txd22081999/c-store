import React from 'react'
import styles from './Category.module.css'

import pattern from '../../images/pattern.png'
import model1 from '../../images/1.png'
import model2 from '../../images/2.png'
import model3 from '../../images/3.png'

const Category = ({ history }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} ${styles.men}`}>
        <div className={styles.btn} onClick={() => history.push('/products')}>
          <span>Men's</span>
        </div>

        <div className={styles['model-container']}>
          <img className={styles.model} src={model1} alt='man model' />
        </div>

        <div className={styles.pattern}>
          <img src={pattern} alt='' />
        </div>
      </div>

      <div className={`${styles.wrapper} ${styles.women}`}>
        <div className={styles.btn} onClick={() => history.push('/products')}>
          <span>Women's</span>
        </div>

        <div className={styles['model-container']}>
          <img className={styles.model} src={model2} alt='man model' />
        </div>

        <div className={styles.pattern}>
          <img src={pattern} alt='' />
        </div>
      </div>

      <div className={`${styles.wrapper} ${styles.kid}`}>
        <div className={styles.btn} onClick={() => history.push('/products')}>
          <span>Kid's</span>
        </div>

        <div className={styles['model-container']}>
          <img className={styles.model} src={model3} alt='kid model' />
        </div>

        <div className={styles.pattern}>
          <img src={pattern} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Category
