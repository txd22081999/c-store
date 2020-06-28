import React from 'react';
import './ProductDetail.css';

import black from '../../images/black.png';
import blue from '../../images/blue.png';
import white from '../../images/white.png';
import avt1 from '../../images/avt1.jpg';
import avt2 from '../../images/avt2.jpg';
import avt3 from '../../images/avt3.jpg';
import avt4 from '../../images/avt4.jpg';

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
];

const ProductDetail = () => {
  return (
    <div className='container'>
      <div className='detail-container'>
        <div className='image-container'>
          <div className='big-image-container'>
            <img src={black} alt='product-image' />
          </div>

          <div className='small-image-container'>
            <div className='small-image-wrapper'>
              <img src={black} alt='product-image' />
            </div>

            <div className='small-image-wrapper'>
              <img src={white} alt='product-image' />
            </div>

            <div className='small-image-wrapper'>
              <img src={blue} alt='product-image' />
            </div>

            <div className='small-image-wrapper'>
              <img src={white} alt='product-image' />
            </div>
          </div>
        </div>
        <div className='info-container'>
          <h3 className='name'>Black Coat</h3>

          <div className='star-container'>
            <div className='star'>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
            </div>

            <span className='review-number'>352 Reviews</span>
          </div>

          <p className='description'>
            Classic outerwear. This coat is made from a cotton-blend whith a
            twill quality and is a modern day wardrobe staple.
          </p>

          <div className='size-container'>
            <h4 className='header'>Size</h4>

            <div className='size'>
              <div className='size-btn small'>S</div>
              <div className='size-btn medium'>M</div>
              <div className='size-btn large'>L</div>
              <div className='size-btn xlarge'>XL</div>
            </div>
          </div>

          <div className='color-container'>
            <h4 className='header'>Color</h4>

            <div className='colors'>
              <div className='color black active'></div>
              <div className='color gray'></div>
              <div className='color white'></div>
            </div>
          </div>

          <div className='quantity-container'>
            <h4 className='header'>Quantity</h4>

            <div className='quantity'>
              <div className='quantity-btn down'>
                <i className='fa fa-caret-down'></i>
              </div>

              <span className='number'>1</span>

              <div className='quantity-btn up'>
                <i className='fa fa-caret-up'></i>
              </div>
            </div>
          </div>

          <span className='price'>$30,00</span>

          <button className='add-btn'>ADD TO BAG</button>
        </div>
      </div>

      <div className='divide'></div>

      <div className='review-container'>
        <h3 className='review-header'> Reviews from customer</h3>

        <div className='star-overview'>
          <div className='total-star'>
            <div className='star'>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
              <i className='fa fa-star' aria-hidden='true'></i>
            </div>

            <span className='review-number'>352 Reviews</span>
          </div>

          <div className='divide'></div>

          <div className='detail-star'>
            <div className='star-review'>
              <div className='star'>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
              </div>

              <div className='bar'></div>

              <span className='total-number'>335</span>
            </div>

            <div className='star-review'>
              <div className='star'>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star unactive' aria-hidden='true'></i>
              </div>

              <div className='bar'></div>

              <span className='total-number'>14</span>
            </div>

            <div className='star-review'>
              <div className='star'>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star unactive' aria-hidden='true'></i>
                <i className='fa fa-star unactive' aria-hidden='true'></i>
              </div>

              <div className='bar'></div>

              <span className='total-number'>3</span>
            </div>

            <div className='star-review'>
              <div className='star'>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star unactive' aria-hidden='true'></i>
                <i className='fa fa-star unactive' aria-hidden='true'></i>
              </div>

              <div className='bar'></div>

              <span className='total-number'>0</span>
            </div>

            <div className='star-review'>
              <div className='star'>
                <i className='fa fa-star' aria-hidden='true'></i>
                <i className='fa fa-star unactive' aria-hidden='true'></i>
                <i className='fa fa-star unactive' aria-hidden='true'></i>
                <i className='fa fa-star unactive' aria-hidden='true'></i>
                <i className='fa fa-star unactive' aria-hidden='true'></i>
              </div>

              <div className='bar'></div>

              <span className='total-number'>0</span>
            </div>
          </div>
        </div>

        <div className='comments-divide'></div>

        {DATA.map((item) => {
          const { id, avatar, userName, date, content, like, dislike } = item;
          return (
            <div className='comments-container' key={id}>
              <div className='comment'>
                <div className='avatar-container'>
                  <div className='avatar-wrapper'>
                    <img src={avatar} alt='avatar' />
                  </div>
                  <div className='check-icon'>
                    <i className='fa fa-check' aria-hidden='true'></i>
                  </div>
                </div>

                <div className='text-container'>
                  <span className='user-name'>{userName}</span>

                  <div className='user-star'>
                    <div className='star'>
                      <i className='fa fa-star' aria-hidden='true'></i>
                      <i className='fa fa-star' aria-hidden='true'></i>
                      <i className='fa fa-star' aria-hidden='true'></i>
                      <i className='fa fa-star' aria-hidden='true'></i>
                      <i className='fa fa-star' aria-hidden='true'></i>
                    </div>
                  </div>

                  <div className='content'>
                    {content.map((message, index) => {
                      return <p key={index}>{message}</p>;
                    })}
                    {/* <p>Amazing jacket. I love it &lt;3</p>

                    <p>I will come back in the future</p> */}
                  </div>

                  <div className='bottom-menu'>
                    <span className='helpful'>Is this review helpful?</span>

                    <div className='like-container'>
                      <i
                        className='like fa fa-thumbs-up'
                        aria-hidden='true'
                      ></i>

                      <span className='count dislike-count'>{like}</span>
                    </div>

                    <div className='dislike-container'>
                      <i
                        className='dislike fa fa-thumbs-down'
                        aria-hidden='true'
                      ></i>

                      <span className='count dislike-count'>{dislike}</span>
                    </div>
                  </div>
                </div>

                <span className='date'>{date}</span>
              </div>

              <div className='comment-divide'></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetail;
