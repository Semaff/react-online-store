import { useRef } from "react";
import { useState } from "react";
import { Arrow } from "../../../_SVG";
import "./Gallery.scss";

const Gallery = ({ width, height, images }) => {
    const galleryRef = useRef();
    const galleryImagesRef = useRef();
    const [curImage, setCurImage] = useState(0);

    const changeCurImage = (e, index) => {
        // Remove old Image
        const currentImg = galleryRef.current.querySelector(".current");
        currentImg.classList.remove("current");

        // Update Current Image
        e.currentTarget.classList.add("current");
        setCurImage(index);
    }

    const nextImg = (e) => {
        let imgWidth = width / 5 || 130;
        const gap = 10;
        galleryImagesRef.current.scrollBy(imgWidth + gap, 0);
    }

    const prevImg = (e) => {
        let imgWidth = width / 5 || 130;
        const gap = 10;
        galleryImagesRef.current.scrollBy(-(imgWidth + gap), 0);
    }

    return (
        <div className="gallery" ref={galleryRef}>
            <div className="gallery__current" style={{ maxWidth: width }}>
                <img src={images[curImage].img} alt="1" style={{ width: width }} />
            </div>

            <div className="gallery__container">
                <button
                    className="btn --rounded --black --lowOpacity --reversed"
                    onClick={() => prevImg()}
                >
                    <Arrow />
                </button>

                <div className="gallery__wrapper">
                    <div className="gallery__images" ref={galleryImagesRef}>
                        {images && images.length > 0 && images.map((image, index) => {
                            if (index === 0) {
                                return (
                                    <picture
                                        key={image.img}
                                        className="gallery__img current"
                                        style={{ maxWidth: width / 5 || "", maxHeight: height / 5 || "" }}
                                        onClick={(e) => changeCurImage(e, index)}
                                    >
                                        <img src={image.img} alt={index + 1} />
                                    </picture>
                                )
                            } else {
                                return (
                                    <picture
                                        key={image.img}
                                        className="gallery__img"
                                        style={{ maxWidth: width / 5 || "", maxHeight: height / 5 || "" }}
                                        onClick={(e) => changeCurImage(e, index)}
                                    >
                                        <img src={image.img} alt={index + 1} />
                                    </picture>
                                )
                            }
                        })}
                    </div>
                </div>

                <button
                    className="btn --rounded --black --lowOpacity"
                    onClick={() => nextImg()}
                >
                    <Arrow />
                </button>
            </div>
        </div>
    )
}

export default Gallery;