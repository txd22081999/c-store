import React, { useEffect } from 'react'
// import './ProductDetail.css';
import styles from './ProductDetail.module.css'

import black from '../../images/black.png'
import blue from '../../images/blue.png'
import white from '../../images/white.png'
import avt1 from '../../images/avt1.jpg'
import avt2 from '../../images/avt2.jpg'
import avt3 from '../../images/avt3.jpg'
import avt4 from '../../images/avt4.jpg'

const DATA = [
  {
    id: 1,
    avatar: avt1,
    userName: 'Chris Tan',
    date: '25/06/20',
    content: ['Amazing jacket. I love it <3', 'I will come back in the future'],
    like: 65,
    dislike: 7,
  },
  {
    id: 2,
    avatar: avt2,
    userName: 'Alex',
    date: '12/05/20',
    content: [`It's fit for me. Very good.`],
    like: 13,
    dislike: 0,
  },
  {
    id: 3,
    avatar: avt3,
    userName: 'Charlie Smith',
    date: '03/05/20',
    content: ['The price is reasonable.'],
    like: 22,
    dislike: 1,
  },
  {
    id: 4,
    avatar: avt4,
    userName: 'Krystal Jung',
    date: '19/04/20',
    content: [
      `These jacket never make me disapointed. This is the third one I have bought`,
    ],
    like: 33,
    dislike: 0,
  },
]

let bigImg
let smallImgs
let sizeBtns
let quantity
let upBtn
let downBtn
let currentNumber = 1
let colors

const changeImage = (e) => {
  let temp = bigImg.src
  bigImg.src = e.target.src
  e.target.src = temp
}

const changeSize = (e) => {
  let currentSize = document.querySelector(`.${styles['size-active']}`)
  currentSize.classList.toggle(styles['size-active'])
  e.target.classList.toggle(styles['size-active'])
}

const upQuantity = (e) => {
  console.log('BOOM')
  currentNumber++
  quantity.textContent = currentNumber
}

const downQuantity = (e) => {
  if (parseInt(currentNumber) === 1) {
    return
  }
  currentNumber--
  quantity.textContent = currentNumber
}

const changeColor = (e) => {
  let currentColor = document.querySelector(`.${styles.active}`)
  // console.log(currentColor);
  // console.log('click');
  currentColor.classList.toggle(styles.active)
  e.target.classList.toggle(styles.active)
}

const ProductDetail = () => {
  useEffect(() => {
    setTimeout(() => {
      bigImg = document.querySelector(`#big-image`)
      smallImgs = document.querySelectorAll(`.small-image`)
      console.log(smallImgs)
      sizeBtns = document.querySelectorAll(`.size-btn`)
      quantity = document.querySelector(`#number`)
      upBtn = document.querySelector(`#increase`)
      downBtn = document.querySelector(`#decrease`)
      colors = document.querySelectorAll(`.color`)
      // console.log(colors);

      smallImgs.forEach((item) => {
        item.addEventListener('click', (e) => changeImage(e))
      })

      sizeBtns.forEach((item) => {
        item.addEventListener('click', (e) => changeSize(e))
      })

      upBtn.addEventListener('click', (e) => upQuantity(e))

      downBtn.addEventListener('click', (e) => downQuantity(e))

      colors.forEach((item) => {
        item.addEventListener('click', (e) => changeColor(e))
      })
    }, 0)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles['detail-container']}>
        <div className={styles['image-container']}>
          <div className={styles['big-image-container']}>
            <img id='big-image' src={black} alt='product-image' />
          </div>

          <div className={styles['small-image-container']}>
            <div className={styles['small-image-wrapper']}>
              <img
                className={`${styles['small-image']} small-image`}
                src={black}
                alt='product-image'
              />
            </div>

            <div className={styles['small-image-wrapper']}>
              <img
                className={`${styles['small-image']} small-image`}
                src={white}
                alt='product-image'
              />
            </div>

            <div className={styles['small-image-wrapper']}>
              <img
                className={`${styles['small-image']} small-image`}
                src={blue}
                alt='product-image'
              />
            </div>

            <div className={styles['small-image-wrapper']}>
              <img
                className={`${styles['small-image']} small-image`}
                src={white}
                alt='product-image'
              />
            </div>
          </div>
        </div>

        <div className={styles['info-container']}>
          <h3 className={styles.name}>Black Coat</h3>

          <div className={styles['star-container']}>
            <div className={styles.star}>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
            </div>

            <span className={styles['review-number']}>352 Reviews</span>
          </div>

          <p className={styles['description']}>
            Classic outerwear. This coat is made from a cotton-blend whith a
            twill quality and is a modern day wardrobe staple.
          </p>

          <div className={styles['size-container']}>
            <h4 className={styles.header}>Size</h4>

            <div className={styles.size}>
              <div
                className={`${styles['size-btn']} size-btn ${styles.small} ${styles['size-active']}`}
              >
                S
              </div>
              <div
                className={`${styles['size-btn']} size-btn ${styles.medium}`}
              >
                M
              </div>
              <div className={`${styles['size-btn']} size-btn ${styles.large}`}>
                L
              </div>
              <div
                className={`${styles['size-btn']} size-btn ${styles.xlarge}`}
              >
                XL
              </div>
            </div>
          </div>

          <div className={styles['color-container']}>
            <h4 className={styles.header}>Color</h4>

            <div className={styles.colors}>
              <div
                className={`${styles.color} color ${styles.black} ${styles.active}`}
              ></div>
              <div className={`${styles.color} color ${styles.gray}`}></div>
              <div className={`${styles.color} color ${styles.white}`}></div>
            </div>
          </div>

          <div className={styles['quantity-container']}>
            <h4 className={styles.header}>Quantity</h4>

            <div className={styles.quantity}>
              <div
                className={`${styles['quantity-btn']} ${styles.down}`}
                id='decrease'
              >
                <i className='fa fa-caret-down'></i>
              </div>

              <span className={`${styles.number}`} id={'number'}>
                1
              </span>

              <div
                className={`${styles['quantity-btn']} ${styles.up}`}
                id='increase'
              >
                <i className='fa fa-caret-up'></i>
              </div>
            </div>
          </div>

          <span className={styles.price}>$30,00</span>

          <button className={styles['add-btn']}>ADD TO BAG</button>
        </div>
      </div>

      <div className={styles.divide}></div>

      <div className={styles['review-container']}>
        <h3 className={styles['review-header']}> Reviews from customer</h3>

        <div className={styles['star-overview']}>
          <div className={styles['total-star']}>
            <div className={styles.star}>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
            </div>

            <span className={styles['review-number']}>352 Reviews</span>
          </div>

          <div className={styles.divide}></div>

          <div className={styles['detail-star']}>
            <div className={styles['star-review']}>
              <div className={styles.star}>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
              </div>

              <div className={styles.bar}></div>

              <span className={styles['total-number']}>335</span>
            </div>

            <div className={styles['star-review']}>
              <div className={styles.star}>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i
                  className={`fa fa-star ${styles.unactive}`}
                  aria-hidden='true'
                ></i>
              </div>

              <div className={styles.bar}></div>

              <span className={styles['total-number']}>14</span>
            </div>

            <div className={styles['star-review']}>
              <div className={styles.star}>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i
                  className={`fa fa-star ${styles.unactive}`}
                  aria-hidden='true'
                ></i>
                <i
                  className={`fa fa-star ${styles.unactive}`}
                  aria-hidden='true'
                ></i>
              </div>

              <div className={styles.bar}></div>

              <span className={styles['total-number']}>3</span>
            </div>

            <div className={styles['star-review']}>
              <div className={styles.star}>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i
                  className={`fa fa-star ${styles.unactive}`}
                  aria-hidden='true'
                ></i>
                <i
                  className={`fa fa-star ${styles.unactive}`}
                  aria-hidden='true'
                ></i>
                <i
                  className={`fa fa-star ${styles.unactive}`}
                  aria-hidden='true'
                ></i>
              </div>

              <div className={styles.bar}></div>

              <span className={styles['total-number']}>0</span>
            </div>

            <div className={styles['star-review']}>
              <div className={styles.star}>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i
                  className={`fa fa-star ${styles.unactive}`}
                  aria-hidden='true'
                ></i>
                <i
                  className={`fa fa-star ${styles.unactive}`}
                  aria-hidden='true'
                ></i>
                <i
                  className={`fa fa-star ${styles.unactive}`}
                  aria-hidden='true'
                ></i>
                <i
                  className={`fa fa-star ${styles.unactive}`}
                  aria-hidden='true'
                ></i>
              </div>

              <div className={styles.bar}></div>

              <span className={styles['total-number']}>0</span>
            </div>
          </div>
        </div>

        <div className={styles['comments-divide']}></div>

        {DATA.map((item) => {
          const { id, avatar, userName, date, content, like, dislike } = item
          return (
            <div className={styles['comments-container']} key={id}>
              <div className={styles.comment}>
                <div className={styles['avatar-container']}>
                  <div className={styles['avatar-wrapper']}>
                    <img src={avatar} alt='avatar' />
                  </div>
                  <div className={styles['check-icon']}>
                    <i className='fa fa-check' aria-hidden='true'></i>
                  </div>
                </div>

                <div className={styles['text-container']}>
                  <span className={styles['user-name']}>{userName}</span>

                  <div className={styles['user-star']}>
                    <div className={styles.star}>
                      <i className='fa fa-star' aria-hidden='true'></i>
                      <i className='fa fa-star' aria-hidden='true'></i>
                      <i className='fa fa-star' aria-hidden='true'></i>
                      <i className='fa fa-star' aria-hidden='true'></i>
                      <i className='fa fa-star' aria-hidden='true'></i>
                    </div>
                  </div>

                  <div className={styles.content}>
                    {content.map((message, index) => {
                      return <p key={index}>{message}</p>
                    })}
                    {/* <p>Amazing jacket. I love it &lt;3</p>

                    <p>I will come back in the future</p> */}
                  </div>

                  <div className={styles['bottom-menu']}>
                    <span className={styles.helpful}>
                      Is this review helpful?
                    </span>

                    <div className={styles['like-container']}>
                      <i
                        className={`${styles.like} like fa fa-thumbs-up`}
                        aria-hidden='true'
                      ></i>

                      <span
                        className={`${styles.count} ${styles['dislike-count']}`}
                      >
                        {like}
                      </span>
                    </div>

                    <div className={styles['dislike-container']}>
                      <i
                        className={`${styles.like} like fa fa-thumbs-down`}
                        aria-hidden='true'
                      ></i>

                      <span
                        className={`${styles.count} ${styles['like-count']}`}
                      >
                        {dislike}
                      </span>
                    </div>
                  </div>
                </div>

                <span className={styles.date}>{date}</span>
              </div>

              <div className={styles['comment-divide']}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductDetail
