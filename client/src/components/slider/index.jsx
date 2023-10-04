import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import poster from '../../assets/poster.png'
import poster2 from '../../assets/poster2.png'
import poster3 from '../../assets/poster3.png'
import './styles.css'

const slides = [poster, poster2, poster3];
const delay = 2500;
export default function Slider() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="slideshow">
      <div className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <img src={slide} alt="" className="slide" />
        ))}
      </div>
      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}