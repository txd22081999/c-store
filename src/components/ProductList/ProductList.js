import React, { useEffect } from 'react';
import styles from './ProductList.module.css';

import item1 from '../../images/14.png';
import item2 from '../../images/12.png';
import item3 from '../../images/13.png';
import stamp1 from '../../images/exclusive.png';
import stamp2 from '../../images/sold-out.png';
import FilterSlider from '../FilterSlider/FilterSlider';
import ProductItem from '../ProductItem/ProductItem';

const openFilterBox = (e) => {
  let filterBox = document.querySelector(`.${styles['filter-box']}`);
  let pageOverlay = document.querySelector(`.${styles['page-overlay']}`);
  pageOverlay.classList.toggle(styles['display-block']);
  pageOverlay.classList.toggle(styles.appear);
  filterBox.classList.toggle(styles['slide-in']);
};

const openSortBox = (e) => {
  let sortBox = document.querySelector(`.${styles['sort-box']}`);
  sortBox.classList.toggle(styles['display-flex']);
};

const closeFilter = (e) => {
  let filterBox = document.querySelector(`.${styles['filter-box']}`);
  let pageOverlay = document.querySelector(`.${styles['page-overlay']}`);
  pageOverlay.classList.toggle(styles.appear);
  pageOverlay.classList.toggle(styles['display-block']);
  filterBox.classList.toggle(styles['slide-in']);
};

const handleDropdown = (e) => {
  e.target.classList.toggle(styles['drop-btn']);

  let classList = String(e.target.classList.value);
  const isColorBtn = classList.includes(styles['expand-color']);
  const isSizeBtn = classList.includes(styles['expand-size']);
  const isPriceBtn = classList.includes(styles['expand-price']);

  if (isColorBtn) {
    let colors = document.querySelector(`#${styles['filter-color-box']}`);
    colors.classList.toggle(styles['display-flex']);
  }
  if (isSizeBtn) {
    let size = document.querySelector(`#${styles['size-box']}`);
    size.classList.toggle(styles['display-flex']);
  }
  if (isPriceBtn) {
    let price = document.querySelector(`#${styles['price-box']}`);
    price.classList.toggle(styles['display-block']);
  }
};

const ITEM_LIST = [
  {
    id: 1,
    img: item1,
    stamp: stamp1,
  },
  {
    id: 2,
    img: item2,
  },
  {
    id: 3,
    img: item3,
    stamp: stamp2,
  },
  {
    id: 4,
    img: item2,
  },
];

const ProductList = () => {
  useEffect(() => {
    // // let product = document.query
  }, []);

  return (
    <div className={styles.container} id='product-list'>
      <h3 className={styles.category}>clothings</h3>

      <div className={styles['header-container']}>
        <div className={styles['filter-container']}>
          <button
            className={`${styles.btn} ${styles.filter}`}
            onClick={(e) => openFilterBox(e)}
          >
            filter
          </button>
        </div>

        <div className={styles['tag-container']}>
          <div className={styles['tag-wrapper']}>
            <span className={styles.tag}>#green</span>
            <i className={`${styles.cross} fa fa-times`} aria-hidden='true'></i>
          </div>

          <div className={styles['tag-wrapper']}>
            <span className={styles.tag}>#large</span>
            <i className={`${styles.cross} fa fa-times`} aria-hidden='true'></i>
          </div>

          <div className={styles['tag-wrapper']}>
            <span className={styles.tag}>#men</span>
            <i className={`${styles.cross} fa fa-times`} aria-hidden='true'></i>
          </div>
        </div>

        <div className={styles['sort-container']}>
          <button
            className={`${styles.btn} ${styles.sort}`}
            onClick={(e) => openSortBox(e)}
          >
            sort
          </button>

          <div className={styles['sort-box']}>
            <span>New</span>
            <span>Lowest price</span>
            <span>Highest price</span>
            <span>Best sellers</span>
          </div>
        </div>
      </div>

      <div className={styles['product-list']}>
        {ITEM_LIST.map((item) => {
          return (
            <ProductItem id={item.id} img={item.img} stampImg={item.stamp} />
          );
        })}
        {/* <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem /> */}
        {/* <div className='item'>
          <div className='img-container'>
            <img className='product-img' src={item1} alt='product' />

            <div className='overlay'></div>

            <span className='view'>Quick view</span>

            <div className='star'>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
            </div>
          </div>

          <div className='colors'>
            <div className='color gray'></div>
            <div className='color black active'></div>
            <div className='color brown'></div>
          </div>

          <span className='name'>rivet heaps collar</span>

          <span className='price'>$30,00</span>
        </div> */}

        {/* <div className='item'>
          <div className='img-container'>
            <div className='stamp'>
              <img src={stamp1} alt='exclusive' />
            </div>
            <img className='product-img' src={item2} alt='product' />

            <div className='overlay'></div>

            <span className='view'>Quick view</span>

            <div className='star'>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
            </div>
          </div>

          <div className='colors'>
            <div className='color white active'></div>
            <div className='color black blue'></div>
          </div>

          <span className='name'>rivet heaps collar</span>

          <span className='price'>$30,00</span>
        </div> */}

        {/* <div className='item'>
          <div className='img-container'>
            <div className='stamp'>
              <img src={stamp2} alt='sold-out' />
            </div>

            <img className='product-img' src={item3} alt='product' />

            <div className='overlay'></div>

            <span className='view'>Quick view</span>

            <div className='star'>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
            </div>
          </div>

          <div className='colors'>
            <div className='color gray active'></div>
            <div className='color brown'></div>
          </div>

          <span className='name'>rivet heaps collar</span>

          <span className='price'>$30,00</span>
        </div> */}

        {/* <div className='item'>
          <div className='img-container'>
            <img className='product-img' src={item2} alt='product' />

            <div className='overlay'></div>

            <span className='view'>Quick view</span>

            <div className='star'>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
            </div>
          </div>

          <div className='colors'>
            <div className='color white active'></div>
            <div className='color green'></div>
            <div className='color yellow'></div>
          </div>

          <span className='name'>rivet heaps collar</span>

          <span className='price'>$30,00</span>
        </div>*/}
      </div>

      <div className={styles['filter-box']}>
        <div className={styles['header-wrapper']}>
          <h3>filter</h3>
          <i
            className={`${styles['close-btn']} fa fa-times`}
            aria-hidden='true'
            onClick={(e) => closeFilter(e)}
          ></i>
        </div>
        <div className={styles['filter-header-container']}>
          <p className={styles['filter-header']}>Color</p>
          <i
            className={`${styles['drop-down']} ${styles['expand-color']} fa fa-caret-down`}
            aria-hidden='true'
            onClick={(e) => {
              handleDropdown(e);
            }}
          ></i>
        </div>

        <div className={styles.colors} id={styles['filter-color-box']}>
          <div className={`${styles.color} ${styles.red}`}></div>
          <div className={`${styles.color} ${styles.blue}`}></div>
          <div className={`${styles.color} ${styles.green}`}></div>
          <div className={`${styles.color} ${styles.yellow}`}></div>
          <div className={`${styles.color} ${styles.purple}`}></div>
          <div className={`${styles.color} ${styles.gray}`}></div>
          <div className={`${styles.color} ${styles.brown}`}></div>
          <div className={`${styles.color} ${styles.black}`}></div>
          {/* <div className='color blue'></div>
          <div className='color green'></div>
          <div className='color yellow'></div>
          <div className='color purple'></div>
          <div className='color gray'></div>
          <div className='color brown'></div>
          <div className='color black'></div> */}
        </div>

        <div className={styles.divide}></div>

        <div className={styles['filter-header-container']}>
          <p className={styles['filter-header']}>Size</p>
          <i
            className={`${styles['drop-down']} ${styles['expand-size']} fa fa-caret-down`}
            aria-hidden='true'
            onClick={(e) => {
              handleDropdown(e);
            }}
          ></i>
        </div>

        <div className={styles.size} id={styles['size-box']}>
          <button className={styles.small}>Small</button>
          <button className={styles.medium}>Medium</button>
          <button className={styles.large}>Large</button>
        </div>

        <div className={styles.divide}></div>

        <div className={styles['filter-header-container']}>
          <p className={styles['filter-header']}>Price</p>
          <i
            className={`${styles['drop-down']} ${styles['expand-price']} fa fa-caret-down`}
            aria-hidden='true'
            onClick={(e) => {
              handleDropdown(e);
            }}
          ></i>
        </div>

        <div className={styles['filter-container']} id={styles['price-box']}>
          <FilterSlider containerWidth='100' />
        </div>
      </div>

      <div className={styles['page-overlay']}></div>
    </div>
  );
};

export default ProductList;
