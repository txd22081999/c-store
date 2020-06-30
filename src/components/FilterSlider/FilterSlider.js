import React, { useState, useEffect } from 'react';
import styles from './FilterSlider.module.css';

let slider;
let selector;
let leftSelector = React.createRef();
let rightSelector = React.createRef();
let sliderRef = React.createRef();
let leftPos; // left selector
let rightPos; // right selector
let leftOffset; // left offset of right selector
let fromAmount;
let toAmount;
let sliderStyle;
let width;
// let activeRangeRef = React.createRef();
console.log('ZERO?');

const FilterSlider = ({ containerWidth }) => {
  const MAX_VALUE = 1500;
  const [leftProp, setLeftProp] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const [rightProp, setRightProp] = useState(0);
  // console.log(rightProp);
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(MAX_VALUE);
  const [activeLeft, setActiveLeft] = useState(0);
  const [activeWidth, setActiveWidth] = useState(0);
  // console.log('FIRST?');

  useEffect(() => {
    slider = document.querySelector(`.${styles['slider']}`);
    sliderStyle = getComputedStyle(sliderRef.current);
    width = parseInt(sliderStyle.width.replace('px', ''));
    setMaxWidth(width);
    // setRightProp(maxWidth);
    // console.log('SECOND?');
    console.log(width);

    selector = document.querySelector(`.${styles.selector}`);
    leftOffset = maxWidth;
    leftPos = 0;
    setActiveWidth(width);
    // fromAmount = document.querySelector(`.${styles.from}`);
    // toAmount = document.querySelector(`.${styles.to}`);
  }, [maxWidth]);

  const handleMouseDown = (e, isLeft) => {
    e = e || window.event;
    if (e.type != 'mousedown') {
      return;
    }
    e.preventDefault();
    document.onmousemove = (e) => handleMouseMove(e, isLeft);
    document.onmouseup = (e) => handleMouseUp(e);
  };

  const handleMouseMove = (e, isLeft) => {
    e = e || window.event;

    if (isLeft) {
      const selectorStyle = getComputedStyle(leftSelector.current);
      let currentPos = parseInt(selectorStyle.left.replace('px', ''));
      leftPos = currentPos;
      // console.log(leftPos);
      // console.log(rightPos);
      if (leftPos > rightPos) {
        setLeftProp(rightPos);
      } else {
        if (e.movementX + currentPos > maxWidth) {
          setLeftProp(maxWidth);
        } else if (e.movementX + currentPos < 0) {
          setLeftProp(0);
        } else {
          setLeftProp(e.movementX + currentPos);
        }
      }
      setActiveLeft(currentPos);
      let leftPercentage = parseInt((currentPos / maxWidth) * MAX_VALUE);
      setFromValue(leftPercentage);
      //   console.log(leftPercentage);
      // console.log(leftPos);
    } else {
      //   console.log('RIGHT');
      const selectorStyle = getComputedStyle(rightSelector.current);
      let currentPos = parseInt(selectorStyle.right.replace('px', ''));
      leftOffset = parseInt(selectorStyle.left.replace('px', ''));
      rightPos = leftOffset;
      // console.log(leftPos);
      // console.log(currentPos);

      if (leftPos > maxWidth - currentPos) {
        setRightProp(maxWidth - leftPos);
      } else {
        if (currentPos < 0) {
          setRightProp(0);
        } else if (currentPos > maxWidth) {
          setRightProp(maxWidth);
        } else {
          setRightProp(currentPos - e.movementX);
        }
      }

      let rightPercentage = parseInt((rightPos / maxWidth) * MAX_VALUE);
      setToValue(rightPercentage);
    }
    // console.log(leftPos);
    // console.log(leftOffset);
    console.log(rightPos);
    setActiveWidth(leftOffset - leftPos);
  };

  const handleMouseUp = (e) => {
    document.onmousemove = null;
    document.onmouseup = null;
  };

  return (
    <div className={styles.container} style={{ width: `${containerWidth}%` }}>
      <p className={styles.from}>
        From: <span>{`$${fromValue}`}</span>
      </p>

      <div className={styles['slider-container']}>
        <div className={styles['slider-wrapper']} ref={sliderRef}>
          <div className={styles.slider}></div>

          <div
            className={styles.active}
            style={{
              left: `${String(activeLeft)}px`,
              width: `${String(activeWidth)}px`,
            }}
          ></div>
        </div>

        <div
          className={`${styles.selector} ${styles['left-selector']}`}
          ref={leftSelector}
          onMouseDown={(e) => handleMouseDown(e, true)}
          onMouseUp={(e) => handleMouseUp(e)}
          style={{ left: `${String(leftProp)}px` }}
        ></div>

        <div
          className={`${styles.selector} ${styles['right-selector']}`}
          ref={rightSelector}
          onMouseDown={(e) => handleMouseDown(e, false)}
          onMouseUp={(e) => handleMouseUp(e)}
          style={{ right: `${String(rightProp)}px` }}
        ></div>
      </div>

      <p className={styles.to}>
        To: <span>{`$${toValue}`}</span>
      </p>

      {/* <button className={styles.apply}>APPLY</button> */}
    </div>
  );
};

export default FilterSlider;
