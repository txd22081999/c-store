import React from 'react';
import styles from './Benefit.module.css';

const Benefit = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ship}>
        <div className={styles.left}>
          <svg
            className='car'
            width='46'
            height='38'
            viewBox='0 0 46 38'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M40.3 3.02342C39.8 1.64675 38.4 0.666748 36.75 0.666748H9.25C7.6 0.666748 6.225 1.64675 5.7 3.02342L0.5 17.0001V35.6668C0.5 36.9501 1.625 38.0001 3 38.0001H5.5C6.875 38.0001 8 36.9501 8 35.6668V33.3334H38V35.6668C38 36.9501 39.125 38.0001 40.5 38.0001H43C44.375 38.0001 45.5 36.9501 45.5 35.6668V17.0001L40.3 3.02342ZM9.25 26.3334C7.175 26.3334 5.5 24.7701 5.5 22.8334C5.5 20.8967 7.175 19.3334 9.25 19.3334C11.325 19.3334 13 20.8967 13 22.8334C13 24.7701 11.325 26.3334 9.25 26.3334ZM36.75 26.3334C34.675 26.3334 33 24.7701 33 22.8334C33 20.8967 34.675 19.3334 36.75 19.3334C38.825 19.3334 40.5 20.8967 40.5 22.8334C40.5 24.7701 38.825 26.3334 36.75 26.3334ZM5.5 14.6667L9.25 4.16675H36.75L40.5 14.6667H5.5Z'
              fill='#4C60A7'
            />
          </svg>
        </div>

        <div className={styles.right}>
          <span className={styles.header}>free shipping</span>
          <p className={styles.description}>Free shipping up to $99,00 order</p>
        </div>
      </div>

      <div className={styles.quality}>
        <div className={styles.left}>
          <svg
            width='42'
            height='42'
            viewBox='0 0 42 42'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21 0.166748C9.50002 0.166748 0.166687 9.50008 0.166687 21.0001C0.166687 32.5001 9.50002 41.8334 21 41.8334C32.5 41.8334 41.8334 32.5001 41.8334 21.0001C41.8334 9.50008 32.5 0.166748 21 0.166748ZM16.8334 31.4167L6.41669 21.0001L9.35419 18.0626L16.8334 25.5209L32.6459 9.70842L35.5834 12.6667L16.8334 31.4167Z'
              fill='#30D615'
            />
          </svg>
        </div>

        <div className={styles.right}>
          <span className={styles.header}>quality assurance</span>
          <p className={styles.description}>
            We guarantee provide you the high quality products
          </p>
        </div>
      </div>

      <div className={styles.time}>
        <div className={styles.left}>
          <svg
            width='37'
            height='38'
            viewBox='0 0 37 38'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M24.6667 0H12.3333V3.61905H24.6667V0ZM16.4444 23.5238H20.5556V12.6667H16.4444V23.5238ZM32.9506 11.5629L35.8694 8.99333C34.9856 8.07048 34.0194 7.2019 32.9711 6.4419L30.0522 9.01143C26.8661 6.76762 22.8578 5.42857 18.5 5.42857C8.28389 5.42857 0 12.721 0 21.7143C0 30.7076 8.26333 38 18.5 38C28.7367 38 37 30.7076 37 21.7143C37 17.8781 35.4789 14.3495 32.9506 11.5629ZM18.5 34.381C10.545 34.381 4.11111 28.7171 4.11111 21.7143C4.11111 14.7114 10.545 9.04762 18.5 9.04762C26.455 9.04762 32.8889 14.7114 32.8889 21.7143C32.8889 28.7171 26.455 34.381 18.5 34.381Z'
              fill='#A851FF'
            />
          </svg>
        </div>

        <div className={styles.right}>
          <span className={styles.header}>delivery on time</span>
          <p className={styles.description}>Product delivery right on time</p>
        </div>
      </div>

      <div className={styles.secure}>
        <div className={styles.left}>
          <svg
            width='23'
            height='39'
            viewBox='0 0 23 39'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.075 17.1625C7.25124 15.9087 5.69999 14.6125 5.69999 12.5938C5.69999 10.2775 7.84624 8.6625 11.4375 8.6625C15.22 8.6625 16.6225 10.4688 16.75 13.125H21.4462C21.2975 9.47 19.0662 6.1125 14.625 5.02875V0.375H8.24999V4.965C4.12749 5.8575 0.812492 8.535 0.812492 12.6363C0.812492 17.545 4.87124 19.9887 10.8 21.4125C16.1125 22.6875 17.175 24.5575 17.175 26.5338C17.175 28 16.1337 30.3375 11.4375 30.3375C7.05999 30.3375 5.33874 28.3825 5.10499 25.875H0.429993C0.684993 30.5287 4.16999 33.1425 8.24999 34.0137V38.625H14.625V34.0563C18.7687 33.27 22.0625 30.8687 22.0625 26.5125C22.0625 20.4775 16.8987 18.4162 12.075 17.1625Z'
              fill='#FFDD0E'
            />
          </svg>
        </div>

        <div className={styles.right}>
          <span className={styles.header}>secure payment</span>
          <p className={styles.description}>Safely doing online payment</p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
