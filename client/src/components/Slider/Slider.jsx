import React from 'react';
import { useRef } from 'react';
import { Arrow } from '../_SVG';
import "./Slider.scss";

const Slider = ({ children }) => {
    const sliderRef = useRef();

    const nextSlides = (e) => {
        const gap = 50;
        const width = sliderRef.current.offsetWidth;
        sliderRef.current.scrollBy(width + gap, 0);
    }

    const prevSlides = (e) => {
        const gap = 50;
        const width = sliderRef.current.offsetWidth;
        sliderRef.current.scrollBy(-(width + gap), 0);
    }

    return (
        <div className="slider">
            <div className="slider__tabs">
                <button className="slider__tab" type="button">Featured</button>
                <button className="slider__tab" type="button">Latest</button>
                <button className="slider__tab" type="button">Bestseller</button>
            </div>

            <div className="slider__wrapper" ref={sliderRef}>
                <div className="slider__inner">
                    {children}
                </div>
            </div>

            <div className="slider__btns">
                <button
                    className="btn  --rounded --border --pseudo-elem --reversed"
                    onClick={(e) => prevSlides(e)}
                    children={<Arrow />}
                />
                <button
                    className="btn  --rounded --border --pseudo-elem"
                    onClick={(e) => nextSlides(e)}
                    children={<Arrow />}
                />
            </div>
        </div>
    )
}

export default Slider;