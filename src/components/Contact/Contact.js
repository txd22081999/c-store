import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container} id='contact-container'>
      <div className={styles.wrapper}>
        <div className={styles.left}></div>

        <div className={styles.right}>
          <div className={styles.content}>
            <h3 className={styles.header}>Contact</h3>

            <div className={styles.text}>
              <i className='fa fa-phone' aria-hidden='true'></i>
              <span>0943.176.152</span>
            </div>

            {/* <div className={styles.text}>
              <i className='fa fa-facebook' aria-hidden='true'></i>
              <span>fb.com/profile.php?id=100005652588055</span>
            </div> */}

            <div className={styles.text}>
              <i className='fa fa-envelope' aria-hidden='true'></i>
              <span>txd22081999@gmail.com</span>
            </div>
          </div>
        </div>

        <div className={styles.underlay}>
          <img src={'/images/map.jpg'} alt='map' />
        </div>
      </div>
    </div>
  )
}

export default Contact
