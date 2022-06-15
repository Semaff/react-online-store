import React, { useEffect, useState } from "react";
import "./Carousel.scss";

const Carousel = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentSlide >= children.length - 1) {
                setCurrentSlide(0)
            } else {
                setCurrentSlide(currentSlide + 1)
            }
        }, 8000);

        return () => clearInterval(timer)
    }, [children.length, currentSlide])

    return (
        <div className="carousel">
            <div className="carousel__inner">
                {children?.length > 0 && children.map((Component, index) => (
                    <div className="carousel__item" key={index} style={{ transform: `translateX(-${currentSlide * 100}%` }}>
                        {Component}
                    </div>
                ))}
            </div>

            <div className="carousel__dots">
                {children?.length > 0 && children.map((_, index) => (
                    <input
                        key={index}
                        checked={index === currentSlide ? true : false}
                        onChange={() => setCurrentSlide(index)}
                        type="radio"
                        className="dot"
                        name="dotBtn"
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel;