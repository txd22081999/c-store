import React, { useEffect, useState } from 'react';
import styles from './Section.module.css';

import model1 from '../../images/m1.jpg';
import model2 from '../../images/m2.png';
import Option from '../Option/Option';
import item1 from '../../images/11.png';
import item2 from '../../images/12.png';
import item3 from '../../images/13.png';
import item4 from '../../images/14.png';

import b1 from '../../images/b1.png';
import b2 from '../../images/b2.png';
import b3 from '../../images/b3.png';
import b4 from '../../images/b4.png';
import b5 from '../../images/b5.png';
import b6 from '../../images/b6.png';

import s1 from '../../images/s1.png';
import s2 from '../../images/s2.png';
import s3 from '../../images/s3.png';
import s4 from '../../images/s4.png';

let items;
let index;
let discoverBtn;
let productItem;
let productName;

const CLOTHE_DATA = [
  {
    id: '1',
    name: 'long sleeve pullover',
    img: item1,
    kind: 'pullover',
    price: '$40,00',
    stars: 5,
  },
  {
    id: '2',
    name: 'white coat',
    img: item2,
    kind: 'coat',
    price: '$30,00',
    stars: 4,
  },
  {
    id: '3',
    name: 'modern business',
    img: item3,
    kind: 'vest',
    price: '$55,00',
    stars: 4,
  },
  {
    id: '4',
    name: 'rivet heap collar',
    img: item4,
    kind: 'shirt',
    price: '$30,00',
    stars: 5,
  },
];

const BAG_DATA = [
  {
    id: '11',
    name: 'bella taylor',
    img: b1,
    kind: 'bag',
    price: '$29,00',
    stars: 5,
  },
  {
    id: '12',
    name: 'chala carryall zip',
    img: b2,
    kind: 'bag',
    price: '$34,00',
    stars: 5,
  },
  {
    id: '13',
    name: 'chala half moon',
    img: b3,
    kind: 'crossbody',
    price: '$29,00',
    stars: 5,
  },
  {
    id: '14',
    name: 'chala mini rose',
    img: b4,
    kind: 'crossbody',
    price: '$44,00',
    stars: 5,
  },
  {
    id: '15',
    name: 'chala organizer cat',
    img: b5,
    kind: 'crossbody',
    price: '$49,00',
    stars: 5,
  },
  {
    id: '16',
    name: 'maruca beetle wrislet',
    img: b6,
    kind: 'bag',
    price: '$29,00',
    stars: 5,
  },
];

const SHOES_DATA = [
  {
    id: '21',
    name: 'converse',
    img: s1,
    kind: 'sneaker',
    price: '$99,00',
    stars: 5,
  },
  {
    id: '22',
    name: 'harley davidson',
    img: s2,
    kind: 'boot',
    price: '$99,00',
    stars: 5,
  },
  {
    id: '23',
    name: 'adidas',
    img: s3,
    kind: 'sneaker',
    price: '$99,00',
    stars: 5,
  },
  {
    id: '24',
    name: 'timberland',
    img: s4,
    kind: 'sneaker',
    price: '$99,00',
    stars: 5,
  },
];

function Section(props) {
  const { img, category, name, price } = props;
  const [dataRender, setDataRender] = useState(CLOTHE_DATA);

  const renderClothes = () => {
    index = 0;
    setDataRender(CLOTHE_DATA);
  };

  const renderBag = () => {
    index = 0;
    setDataRender(BAG_DATA);
  };

  const renderShoes = () => {
    index = 0;
    setDataRender(SHOES_DATA);
  };

  const handlePrevious = (e) => {
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
    discoverBtn = document.querySelector(`#${styles['discover-btn']}`);
    productItem = document.querySelector(`.${styles['product']}`);
    productName = document.querySelector(`.${styles['name']}`);

    discoverBtn.addEventListener('click', () => {
      window.open('./products', '_self');
    });

    productItem.addEventListener('click', () => {
      window.open('./product', '_self');
    });

    productName.addEventListener('click', () => {
      window.open('./product', '_self');
    });

    items = document.querySelector('#carousel').childNodes;
    index = 0;
  }, []);

  console.log(props);

  let clothingProduct = dataRender.map((product) => {
    let starContainer = [];
    for (var i = 0; i < product.stars; i++) {
      starContainer.push(
        <i key={index} className='fa fa-star' aria-hidden='true'></i>
      );
    }

    return (
      <div className={styles.item} key={product.id}>
        <div className={styles['img-container']}>
          <img
            src={product.img}
            alt='product-image'
            className={styles['product']}
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
    );
  });

  let switchSideClass;
  let model;
  let containerId;

  if (props.type === 'women') {
    switchSideClass = `${styles.left} ${styles.switch}`;
    model = model2;
    containerId = 'id2';
  }
  if (props.type === 'men') {
    switchSideClass = `${styles.left}`;
    model = model1;
    containerId = 'id1';
  }

  return (
    <div className={styles.container} id={containerId}>
      <div className={switchSideClass}>
        <img src={model} alt='model' />
        <div className={`${styles.overlay} ${styles['dark-overlay']}`}></div>
        <div className={`${styles.overlay} ${styles['white-overlay']}`}></div>
        <div className={styles['more-wrapper']}>
          <span className={styles.more} id={styles['discover-btn']}>
            discover more
          </span>
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
          <Option
            containerId={`option-${containerId}`}
            renderClothes={() => renderClothes()}
            renderBag={() => renderBag()}
            renderShoes={() => renderShoes()}
          />
        </div>

        <div className={styles.carousel} id='carousel'>
          {clothingProduct}
        </div>
      </div>
    </div>
  );
}

export default Section;
