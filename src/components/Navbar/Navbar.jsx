import React from 'react';
import lemonIcon from '../../assets/lemon-icon.svg';
import luggageIcon from '../../assets/luggage-icon.svg';
import shoppingBagIcon from '../../assets/shopping-bag-icon.svg';
import umbrellaIcon from '../../assets/umbrella-icon.svg';

import './Navbar.css';

const Navbar = () => {
  const menuRef = React.useRef(null);
  const [isHideMenu, setHideMenu] = React.useState(true);

  function handleDropDown(e) {
    e.preventDefault();
    const { current } = menuRef;
    if (isHideMenu) {
      current.className = 'navbar__dropdown__menu';
      return setHideMenu(false);
    }
    current.className = 'navbar__dropdown__menu hide';
    return setHideMenu(true);
  }

  return (
    <div className="navbar">
      <section className="navbar__section navbar__main bh">
        <a href="#main" className="navbar__main__a bh">
          Pufi
        </a>
      </section>
      <section className="navbar__section navbar__section2">
        <a href="#PUFF" className="navbar__link bh">
          <img className="navbar__icon" src={lemonIcon} alt="A Lemon" />
          PUFI PUFF
        </a>
        <a href="#RAIN" className="navbar__link bh">
          <img className="navbar__icon" src={umbrellaIcon} alt="An umbrella" />
          PUFI RAIN
        </a>
        <a href="#CART" className="navbar__link bh">
          <img
            className="navbar__icon bh"
            src={shoppingBagIcon}
            alt="A shopping bag"
          />
          PUFI CART
        </a>
        <a href="#NAP" className="navbar__link bh">
          <img className="navbar__icon" src={luggageIcon} alt="A luggage" />
          PUFI NAP
        </a>
      </section>
      <section className="navbar__section">
        <div className="navbar__dropdown">
          <button
            className="navbar__button__dropdown bh"
            onClick={(e) => handleDropDown(e)}
          >
            Mi cuenta ▼
          </button>
          <ul className="navbar__dropdown__menu hide" ref={menuRef}>
            {/* Acá van links pero pongo texto plano */}
            <li className="navbar__dropdown__item bh">Mi cuenta</li>
            <li className="navbar__dropdown__item bh">Configuración</li>
            <li className="navbar__dropdown__item bh">Cerrar sesión</li>
          </ul>
        </div>
        <a href="/#" className="navbar__link__micuenta bh">
          Mi compra
        </a>
      </section>
    </div>
  );
};

export default Navbar;
