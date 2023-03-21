import React from 'react';
import womanHavingFun from '../../assets/images/woman-having-fun-beach_1.webp';
import beautifulIsland from '../../assets/images/beautiful-island-with-beach.webp';
import peopleWithUmbrella from '../../assets/images/people-with-umbrellas.webp';
import womanShopingBag from '../../assets/images/shopping-bag.webp';
import blueHouse from '../../assets/images/blue-house-sea_1.webp';
import womanWithUmbrella from '../../assets/images/woman-with-umbrella.webp';

import './Collage.css';

const Collage = () => {
  return (
    <div className="collage">
      <p className="collage__p">Instagram</p>
      <h3 className="collage__hashtag">#ESPUFI</h3>
      <div className="collage__container">
        <div className="CI collage__item1">
          <img
            src={womanHavingFun}
            alt="collage first item"
            width="320px"
            height="180px"
          />{' '}
        </div>
        <div className="CI collage__item2">
          <img
            src={beautifulIsland}
            alt="collage second item"
            width="320px"
            height="180px"
          />{' '}
        </div>
        <div className="CI collage__item3">
          <img
            src={peopleWithUmbrella}
            alt="collage thrid item"
            width="320px"
            height="180px"
          />{' '}
        </div>
        <div className="CI collage__item4">
          <img
            src={womanShopingBag}
            alt="collage fourth item"
            width="320px"
            height="180px"
          />{' '}
        </div>
        <div className="CI collage__item5">
          <img
            src={blueHouse}
            alt="collage fifth item"
            width="320px"
            height="180px"
          />{' '}
        </div>
        <div className="CI collage__item6">
          <img
            src={womanWithUmbrella}
            alt="collage sixth item"
            width="320px"
            height="180px"
          />{' '}
        </div>
      </div>
    </div>
  );
};

export default Collage;
