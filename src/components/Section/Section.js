import React, { useEffect, useState } from 'react'
import styles from './Section.module.css'
import Option from '../Option/Option'

// import model1 from '../../images/m1.jpg'
// import model2 from '../../images/m2.png'
// import model3 from '../../images/m3.png'

// import item1 from '../../images/11.png'
// import item2 from '../../images/12.png'
// import item3 from '../../images/13.png'
// import item4 from '../../images/14.png'

// import b1 from '../../images/b1.png'
// import b2 from '../../images/b2.png'
// import b3 from '../../images/b3.png'
// import b4 from '../../images/b4.png'
// import b5 from '../../images/b5.png'
// import b6 from '../../images/b6.png'

// import h1 from '../../images/h1.png'
// import h2 from '../../images/h2.png'
// import h3 from '../../images/h3.png'
// import h4 from '../../images/h4.png'

// import s1 from '../../images/s1.png'
// import s2 from '../../images/s2.png'
// import s3 from '../../images/s3.png'
// import s4 from '../../images/s4.png'

// import wm1 from '../../images/wm1.png'
// import wm2 from '../../images/wm2.png'
// import wm3 from '../../images/wm3.png'
// import wm4 from '../../images/wm4.png'

// import k1 from '../../images/k1.png'
// import k2 from '../../images/k2.png'
// import k3 from '../../images/k3.png'
// import k4 from '../../images/k4.png'

let items

let discoverBtn
let productItem
let productName

const MEN_CLOTHE_DATA = [
  {
    id: '1',
    name: 'long sleeve pullover',
    img: '/images/11.png',
    kind: 'pullover',
    price: '$40,00',
    stars: 5,
  },
  {
    id: '2',
    name: 'white coat',
    img: '/images/12.png',
    kind: 'coat',
    price: '$30,00',
    stars: 4,
  },
  {
    id: '3',
    name: 'modern business',
    img: '/images/13.png',
    kind: 'vest',
    price: '$55,00',
    stars: 4,
  },
  {
    id: '4',
    name: 'rivet heap collar',
    img: '/images/14.png',
    kind: 'shirt',
    price: '$30,00',
    stars: 5,
  },
]

const BAG_DATA = [
  {
    id: '11',
    name: 'bella taylor',
    img: '/images/b1.png',
    kind: 'bag',
    price: '$29,00',
    stars: 5,
  },
  {
    id: '12',
    name: 'chala carryall zip',
    img: '/images/b2.png',
    kind: 'bag',
    price: '$34,00',
    stars: 5,
  },
  {
    id: '13',
    name: 'chala half moon',
    img: '/images/b3.png',
    kind: 'crossbody',
    price: '$29,00',
    stars: 5,
  },
  {
    id: '14',
    name: 'chala mini rose',
    img: '/images/b4.png',
    kind: 'crossbody',
    price: '$44,00',
    stars: 5,
  },
  {
    id: '15',
    name: 'chala organizer cat',
    img: '/images/b5.png',
    kind: 'crossbody',
    price: '$49,00',
    stars: 5,
  },
  {
    id: '16',
    name: 'maruca beetle wrislet',
    img: '/images/b6.png',
    kind: 'bag',
    price: '$29,00',
    stars: 5,
  },
]

const HAT_DATA = [
  {
    id: '21',
    name: 'ava cotton',
    img: '/images/h1.png',
    kind: 'hat',
    price: '$39,00',
    stars: 5,
  },
  {
    id: '22',
    name: 'gain fedora',
    img: '/images/h2.png',
    kind: 'hat',
    price: '$39,00',
    stars: 5,
  },
  {
    id: '23',
    name: `kid's sun hat`,
    img: '/images/h3.png',
    kind: 'hat',
    price: '$39,00',
    stars: 5,
  },
  {
    id: '24',
    name: 'voyage creek',
    img: '/images/h4.png',
    kind: 'hat',
    price: '$39,00',
    stars: 5,
  },
]

const SHOES_DATA = [
  {
    id: '31',
    name: 'converse',
    img: '/images/s1.png',
    kind: 'sneaker',
    price: '$99,00',
    stars: 5,
  },
  {
    id: '32',
    name: 'harley davidson',
    img: '/images/s2.png',
    kind: 'boot',
    price: '$99,00',
    stars: 5,
  },
  {
    id: '33',
    name: 'adidas',
    img: '/images/s3.png',
    kind: 'sneaker',
    price: '$99,00',
    stars: 5,
  },
  {
    id: '34',
    name: 'timberland',
    img: '/images/s4.png',
    kind: 'sneaker',
    price: '$99,00',
    stars: 5,
  },
]

const WOMEN_CLOTHE_DATA = [
  {
    id: '41',
    name: 'cotton utility jumpsuit',
    img: '/images/wm1.png',
    kind: 'jumpsuit',
    price: '$50,00',
    stars: 5,
  },
  {
    id: '42',
    name: 'Cropped Top',
    img: '/images/wm2.png',
    kind: 'top',
    price: '$50,00',
    stars: 5,
  },
  {
    id: '43',
    name: 'lyocell blend dress',
    img: '/images/wm3.png',
    kind: 'dress',
    price: '$50,00',
    stars: 5,
  },
  {
    id: '44',
    name: 'slim jean',
    img: '/images/wm4.png',
    kind: 'jean',
    price: '$50,00',
    stars: 5,
  },
]

const KID_CLOTHE_DATA = [
  {
    id: '51',
    name: 'hooded jacket',
    img: '/images/k1.png',
    kind: 'jacket',
    price: '$29,00',
    stars: 5,
  },
  {
    id: '52',
    name: 'glittery tulle dress',
    img: '/images/k2.png',
    kind: 'dress',
    price: '$29,00',
    stars: 5,
  },
  {
    id: '53',
    name: 'comfort stretch short',
    img: '/images/k3.png',
    kind: 'overall',
    price: '$29,00',
    stars: 5,
  },
  {
    id: '54',
    name: 'henley shirt',
    img: '/images/k4.png',
    kind: 'shirt',
    price: '$29,00',
    stars: 5,
  },
]

const Section = (props) => {
  const { img, category, name, price, history } = props
  let index = 0
  const [dataRender, setDataRender] = useState(MEN_CLOTHE_DATA)

  const renderClothes = () => {
    index = 0
    setDataRender(MEN_CLOTHE_DATA)
  }

  const renderWomenClothes = () => {
    index = 0
    setDataRender(WOMEN_CLOTHE_DATA)
  }

  const renderKidClothes = () => {
    index = 0
    setDataRender(KID_CLOTHE_DATA)
  }

  const renderBag = () => {
    // index = 0;
    setDataRender(BAG_DATA)
  }

  const renderHat = () => {
    index = 0
    setDataRender(HAT_DATA)
  }

  const renderShoes = () => {
    index = 0
    setDataRender(SHOES_DATA)
  }

  const handlePrevious = (e, items) => {
    // console.log('CLICK');
    console.log(index)
    let leftIndex = index - 1
    let rightIndex = index + 2
    // let rightIndex = index + 3;
    if (index == 0) {
      return
    }
    items[leftIndex].style.opacity = '1'
    items.forEach((item) => {
      item.style.transform = `translateX(${-100 * (index - 1)}%)`
    })
    items[rightIndex].style.opacity = '0'
    index--
  }

  const handleNext = (e, items) => {
    // console.log('CLICK');
    console.log(index)
    let leftIndex = index
    let rightIndex = index + 3
    if (rightIndex > items.length - 1) {
      return
    }
    items[rightIndex].style.opacity = '1'
    items.forEach((item) => {
      item.style.transform = `translateX(${-100 * (index + 1)}%)`
    })
    // items[rightIndex].style.opacity = '0';
    items[leftIndex].style.opacity = '0'
    index++
  }

  let containerId
  let switchSideClass
  let model

  if (props.type === 'women') {
    switchSideClass = `${styles.left} ${styles.switch} ${styles['women-model']}`
    model = '/images/m2.png'
    containerId = 'id2'
  }
  if (props.type === 'men') {
    switchSideClass = `${styles.left}`
    model = '/images/m1.jpg'
    containerId = 'id1'
  }
  if (props.type === 'kid') {
    switchSideClass = `${styles.left} ${styles.kid}`
    model = '/images/m3.png'
    containerId = 'id3'
  }

  useEffect(() => {
    if (props.type == 'men') {
      setDataRender(MEN_CLOTHE_DATA)
    }
    if (props.type == 'women') {
      setDataRender(WOMEN_CLOTHE_DATA)
    }
    if (props.type == 'kid') {
      setDataRender(KID_CLOTHE_DATA)
    }

    items = document.querySelector(`#${containerId} #carousel`).childNodes

    discoverBtn = document.querySelector(`#${styles['discover-btn']}`)
    productItem = document.querySelectorAll(`.${styles['product']}`)
    productName = document.querySelector(`.${styles['name']}`)

    index = 0
  }, [])

  let productData = dataRender.map((product) => {
    let starContainer = []
    for (var i = 0; i < product.stars; i++) {
      starContainer.push(
        <i key={index} className='fa fa-star' aria-hidden='true'></i>
      )
    }

    return (
      <div className={styles.item} key={product.id}>
        <div className={styles['img-container']}>
          <img
            src={product.img}
            alt='product-image'
            className={styles['product']}
            onClick={() => history.push('/product/1')}
          />
        </div>

        <div className={styles.line}></div>

        <div className={styles.wrapper}>
          <span className={styles.category}>{product.kind}</span>

          <div className={styles.star}>{starContainer}</div>
        </div>

        <span className={styles.name}>{product.name}</span>
        <span className={styles.price}>{product.price}</span>
      </div>
    )
  })

  return (
    <div className={styles.container} id={containerId}>
      {/* Left  */}
      <div className={switchSideClass}>
        <img src={model} alt='model' />

        <div className={`${styles.overlay} ${styles['dark-overlay']}`}></div>

        <div className={`${styles.overlay} ${styles['white-overlay']}`}></div>

        <div className={styles['more-wrapper']}>
          <span
            className={styles.more}
            id={styles['discover-btn']}
            onClick={() => history.push('products/1')}
          >
            discover more
          </span>

          <div className={styles['more-box']}></div>
        </div>
      </div>

      {/* Right */}
      <div className={styles.right}>
        <i
          className={`${styles.arrow} ${styles['left-arrow']} fa fa-caret-left`}
          onClick={(e) => {
            items = document.querySelector(
              `#${containerId} #carousel`
            ).childNodes
            console.log(items)
            handlePrevious(e, items)
          }}
          aria-hidden='true'
        ></i>

        <i
          className={`${styles.arrow} ${styles['right-arrow']} fa fa-caret-right`}
          onClick={(e) => {
            items = document.querySelector(
              `#${containerId} #carousel`
            ).childNodes
            console.log(items)
            handleNext(e, items)
          }}
          aria-hidden='true'
        ></i>

        <div className={styles['option-container']}>
          <Option
            containerId={`option-${containerId}`}
            renderClothes={() => renderClothes()}
            renderWomenClothes={() => renderWomenClothes()}
            renderKidClothes={() => renderKidClothes()}
            renderBag={() => renderBag()}
            renderHat={() => renderHat()}
            renderShoes={() => renderShoes()}
          />
        </div>

        <div className={styles.carousel} id='carousel'>
          {productData}
        </div>
      </div>
    </div>
  )
}

export default Section
