import React from 'react';
import beautifulIsland from '../../assets/images/beautiful-island-with-beach.webp';
import blueHouse from '../../assets/images/blue-house-sea_1.webp';
import womanHavingFun from '../../assets/images/woman-having-fun-beach_1.webp';
import './Carousel.css';
import {
  increment,
  decrement,
  changeBySpecificValue,
} from '../../features/imageSlice';
import { useDispatch, useSelector } from 'react-redux';

const Carousel = () => {
  // Si se usa estado local
  // const [currentImage, setCurrentImage] = React.useState(0);
  const images = [womanHavingFun, blueHouse, beautifulIsland];

  const currentImage = useSelector((state) => state.currentImage.value);
  const dispatch = useDispatch();

  function handleSetNextImage(e) {
    e.preventDefault();
    // Con redux
    if (currentImage < images.length - 1) {
      return dispatch(increment());
    }
    return dispatch(changeBySpecificValue(0));

    /*
      En el caso de utilizar un estado local

      if (currentImage < images.length - 1)
        return setCurrentImage(currentImage + 1);
      return setCurrentImage(0);
    */
  }

  function handlePreviousImage(e) {
    e.preventDefault();

    // Con redux
    if (currentImage > 0) return dispatch(decrement());
    return dispatch(changeBySpecificValue(images.length - 1));

    /*
      En el caso de utilizar un estado local

      if (currentImage > 0) return setCurrentImage(currentImage - 1);
      return setCurrentImage(images.length - 1);
    */
  }

  function getImage() {
    return images[currentImage];
  }

  return (
    <div className="carousel" id="main">
      <button
        className="carousel__button --left"
        onClick={(e) => handlePreviousImage(e)}
      >
        {'<'}
      </button>
      <button
        className="carousel__button --right"
        onClick={(e) => handleSetNextImage(e)}
      >
        {'>'}
      </button>
      <div className="carousel__center">
        <h2 className="carouse__text">Estar cómodo nunca fue tan fácil</h2>
        <button href="/#" className="carousel__shopbutton">
          SHOP
        </button>
        <ul className="carousel__imageslength">
          {images.map((_, index) => {
            return (
              <li
                className={`carousel__index ${
                  currentImage === index ? '--active' : ''
                }`}
                onClick={() => dispatch(changeBySpecificValue(index))}
                key={index}
              >
                ○
              </li>
            );
          })}
        </ul>
      </div>
      <img
        className="carousel__image"
        src={getImage()}
        alt="carousel actual img"
      />
    </div>
  );
};

export default Carousel;
