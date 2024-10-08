import React, { useRef } from "react";
import { Arrow } from "../_SVG";
import "./Slider.scss";

const Slider = ({ children }) => {
  const sliderRef = useRef();

  const nextSlides = (e) => {
    const timesToScroll = sliderRef.current.scrollWidth / sliderRef.current.offsetWidth;
    const width = sliderRef.current.offsetWidth / timesToScroll;
    const gap = 50;
    sliderRef.current.scrollBy(width + gap, 0);
  };

  const prevSlides = (e) => {
    const timesToScroll = sliderRef.current.scrollWidth / sliderRef.current.offsetWidth;
    const width = sliderRef.current.offsetWidth / timesToScroll;
    const gap = 50;
    sliderRef.current.scrollBy(-(width + gap), 0);
  };

  return (
    <div className="slider">
      <div className="slider__inner" ref={sliderRef}>
        {children}
      </div>

      <div className="slider__btns">
        <button
          className="btn  --rounded --border --pseudo-elem --reversed"
          onClick={(e) => prevSlides(e)}
        >
          <Arrow />
        </button>
        <button className="btn  --rounded --border --pseudo-elem" onClick={(e) => nextSlides(e)}>
          <Arrow />
        </button>
      </div>
    </div>
  );
};

export default Slider;
