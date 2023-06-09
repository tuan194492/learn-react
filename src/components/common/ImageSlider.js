import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
        <img width="50" height="50" src="https://img.icons8.com/ios/50/previous.png" alt="previous" onClick={prevSlide}/>
      <img className="slider__image" src={images[currentIndex]} alt="Slider" />
      <img width="50" height="50" src="https://img.icons8.com/ios/50/next.png" alt="next" onClick={nextSlide}/>
    </div>
  );
};

export default ImageSlider;
