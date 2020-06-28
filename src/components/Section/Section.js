import React, { useEffect } from 'react';
import styles from './Section.module.css';

import model from '../../images/m1.jpg';
import Option from '../Option/Option';
import item1 from '../../images/11.png';
import item2 from '../../images/12.png';
import item3 from '../../images/13.png';
import item4 from '../../images/14.png';

// const asd = document.getElementById('id1');
let asd;
let items;
let index;
// let leftIndex;
// let rightIndex;

function Section(props) {
  const { img, category, name, price } = props;

  const handlePrevious = (e) => {
    // console.log(index);
    // if (index + 4 > items.length) {
    //   console.log('OUT');
    //   return;
    // }
    // console.log('Left index: ' + index);
    // items.forEach((item) => {
    //   item.style.transform = `translateX(${100 * index}%)`;
    // });
    // // items[index].style.opacity = '0';
    // index++;
    // let leftIndex = index - 1;
    let leftIndex = index - 1;
    let rightIndex = index + 2;
    console.log('Left index: ' + leftIndex);
    console.log('Right index: ' + rightIndex);
    // let rightIndex = index + 3;
    if (index == 0) {
      console.log('OUT');
      return;
    }
    items[leftIndex].style.opacity = '1';
    items.forEach((item) => {
      item.style.transform = `translateX(${-100 * (index - 1)}%)`;
    });
    items[rightIndex].style.opacity = '0';
    index--;
  };

  const handleNext = (e) => {
    let leftIndex = index;
    let rightIndex = index + 3;
    console.log('Left index: ' + leftIndex);
    console.log('Right index: ' + rightIndex);
    if (rightIndex > items.length - 1) {
      console.log('OUT');
      return;
    }
    items[rightIndex].style.opacity = '1';
    items.forEach((item) => {
      item.style.transform = `translateX(${-100 * (index + 1)}%)`;
    });
    // items[rightIndex].style.opacity = '0';
    items[leftIndex].style.opacity = '0';
    index++;
  };

  useEffect(() => {
    // asd = document.getElementById('id1');
    items = document.querySelector('#carousel').childNodes;
    index = 0;
    // rightIndex = 0;
  }, []);

  return (
    <div className={styles.container} id='id1'>
      <div className={styles.left}>
        <img src={model} alt='model' />
        {/* <div className={styles.overlay}></div> */}
        <div className={`${styles.overlay} ${styles['dark-overlay']}`}></div>
        <div className={`${styles.overlay} ${styles['white-overlay']}`}></div>
        <div className={styles['more-wrapper']}>
          <span className={styles.more}>discover more</span>
          <div className={styles['more-box']}></div>
        </div>
      </div>

      <div className={styles.right}>
        <i
          className={`${styles.arrow} ${styles['left-arrow']} fa fa-caret-left`}
          onClick={(e) => handlePrevious(e)}
          aria-hidden='true'
        ></i>

        <i
          className={`${styles.arrow} ${styles['right-arrow']} fa fa-caret-right`}
          onClick={(e) => handleNext(e)}
          aria-hidden='true'
        ></i>

        <div className={styles['option-container']}>
          <Option />
        </div>

        <div className={styles.carousel} id='carousel'>
          <div className={styles.item}>
            <div className={styles['img-container']}>
              <img src={item1} alt='product-image' />
            </div>

            <div className={styles.line}></div>

            <div className={styles.wrapper}>
              <span className={styles.category}>pullover</span>
              <div className={styles.star}>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
              </div>
            </div>

            <span className={styles.name}>long sleeve pullover</span>
            <span className={styles.price}>$40,00</span>
          </div>
          <div className={styles.item}>
            <div className={styles['img-container']}>
              <img src={item2} alt='product-image' />
            </div>

            <div className={styles.line}></div>

            <div className={styles.wrapper}>
              <span className={styles.category}>coat</span>
              <div className={styles.star}>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
              </div>
            </div>

            <span className={styles.name}>white coat</span>
            <span className={styles.price}>$30,00</span>
          </div>

          <div className={styles.item}>
            <div className={styles['img-container']}>
              <img src={item3} alt='product-image' />
            </div>

            <div className={styles.line}></div>

            <div className={styles.wrapper}>
              <span className={styles.category}>vest</span>
              <div className={styles.star}>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
              </div>
            </div>

            <span className={styles.name}>modern business</span>
            <span className={styles.price}>$55,00</span>
          </div>

          <div className={styles.item}>
            <div className={styles['img-container']}>
              <img src={item4} alt='product-image' />
            </div>

            <div className={styles.line}></div>

            <div className={styles.wrapper}>
              <span className={styles.category}>shirt</span>
              <div className={styles.star}>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
              </div>
            </div>

            <span className={styles.name}>rivet heaps collar</span>
            <span className={styles.price}>$30,00</span>
          </div>

          <div className={styles.item}>
            <div className={styles['img-container']}>
              <img src={item4} alt='product-image' />
            </div>

            <div className={styles.line}></div>

            <div className={styles.wrapper}>
              <span className={styles.category}>shirt</span>
              <div className={styles.star}>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
              </div>
            </div>

            <span className={styles.name}>Item 4</span>
            <span className={styles.price}>$30,00</span>
          </div>

          <div className={styles.item}>
            <div className={styles['img-container']}>
              <img src={item4} alt='product-image' />
            </div>

            <div className={styles.line}></div>

            <div className={styles.wrapper}>
              <span className={styles.category}>shirt</span>
              <div className={styles.star}>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
              </div>
            </div>

            <span className={styles.name}>Item 5</span>
            <span className={styles.price}>$30,00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
