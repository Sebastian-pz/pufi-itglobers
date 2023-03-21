import React from 'react';
import './Footer.css';
import facebookIcon from '../../assets/facebook-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import shieldIcon from '../../assets/shield-icon.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__section">
        <a href="#main" className="footer__title">
          Pufi
        </a>
      </section>
      <section className="footer__section">
        <a href="#RAIN" className="footer__anchor">
          PUFI RAIN
        </a>
        <a href="#PUFF" className="footer__anchor">
          PUFI PUFF
        </a>
        <a href="#CART" className="footer__anchor">
          PUFI CART
        </a>
        <a href="#NAP" className="footer__anchor">
          PUFI NAP
        </a>
      </section>
      <section className="footer__section">
        <a href="/contacto" target="__blank" className="footer__anchor">
          CONTACTO
        </a>
        <a href="/ayuda" target="__blank" className="footer__anchor">
          AYUDA
        </a>
        <a href="/comocomprar" target="__blank" className="footer__anchor">
          CÓMO COMPRAR
        </a>
        <a
          href="/terminosycondiciones"
          target="__blank"
          className="footer__anchor"
        >
          TÉRMINOS Y CONDICIONES
        </a>
      </section>
      <section className="footer__section">
        <h2>COMRPA 100% SEGURA</h2>
        <div className="footer__secureInfo">
          <img src={shieldIcon} alt="Secure icon" />
          <h3>Compra con la garantía de PUFI</h3>
        </div>
      </section>
      <section className="footer__section">
        <h2>Siguenos en</h2>
        <div className="footer__socials">
          <a href="https://www.facebook.com/" className="footer__social">
            <img src={facebookIcon} alt="facebook icon" />
          </a>
          <a href="https://twitter.com/" className="footer__social">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
          <a href="https://www.instagram.com/" className="footer__social">
            <img src={instagramIcon} alt="" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
