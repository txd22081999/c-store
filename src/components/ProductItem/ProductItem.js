import React from 'react'
import styles from './ProductItem.module.css'

import item1 from '../../images/14.png'
import item2 from '../../images/12.png'
import item3 from '../../images/13.png'
import stamp1 from '../../images/exclusive.png'
import stamp2 from '../../images/sold-out.png'

const ProductItem = ({ id, img, stampImg, colorArr, name, price, history }) => {
  const selectColor = (e) => {
    const product = document.querySelector(`.item-id-${id}`)
    const children = product.childNodes
    let colors

    children.forEach((child) => {
      let className = String(child.className)
      if (className.includes(`colors-item-id-${id}`)) {
        colors = child
      }
    })

    let activeColor
    let selectedColor = e.target

    colors.childNodes.forEach((color) => {
      if (color.className.includes(styles.active)) {
        activeColor = color
      }
    })

    activeColor.classList.toggle(styles.active)
    e.target.classList.toggle(styles.active)
  }

  return (
    <div className={`${styles.item} item-id-${id}`}>
      <div className={styles['img-container']}>
        {/* Render stamp image */}
        {stampImg ? (
          <div className={styles.stamp}>
            <img src={stampImg} alt='sold-out' />
          </div>
        ) : null}

        <img className={styles['product-img']} src={img} alt='product' />

        <div
          className={styles.overlay}
          onClick={() => {
            history.push(`/product/${id}`)
          }}
        ></div>

        {/* <span className={styles.view}>Quick view</span> */}

        <div className={styles.star}>
          <i className='fa fa-star' aria-hidden='true'></i>
          <i className='fa fa-star' aria-hidden='true'></i>
          <i className='fa fa-star' aria-hidden='true'></i>
          <i className='fa fa-star' aria-hidden='true'></i>
          <i className='fa fa-star' aria-hidden='true'></i>
        </div>
      </div>

      <div className={`${styles.colors} colors-item-id-${id}`}>
        {colorArr.map((item, index) => {
          const { id, color } = item
          let element

          if (index === 0) {
            element = (
              <div
                className={`item-${item.id} ${styles.color} ${
                  styles[`${item.color}`]
                } ${styles.active}`}
                onClick={(e) => selectColor(e)}
                key={item.id}
              ></div>
            )
          } else {
            element = (
              <div
                className={`item-${item.id}  ${styles.color} ${
                  styles[`${item.color}`]
                }`}
                onClick={(e) => selectColor(e)}
                key={item.id}
              ></div>
            )
          }

          // console.log(element);
          return element
        })}

        {/* Color circle */}
        {/* <div
          className={`${styles.color} ${styles.gray}`}
          onClick={(e) => selectColor(e)}
        ></div>
        <div
          className={`${styles.color} ${styles.black} ${styles.active}`}
          onClick={(e) => selectColor(e)}
        ></div>
        <div
          className={`${styles.color} ${styles.brown}`}
          onClick={(e) => selectColor(e)}
        ></div> */}
      </div>

      <span className={styles.name}>{name}</span>

      <span className={styles.price}>{price}</span>
    </div>
  )
}

export default ProductItem
