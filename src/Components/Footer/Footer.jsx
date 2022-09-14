import React from 'react';
import logoNegro from '../../assets/images/logoNegro.svg';
import escudo from '../../assets/images/escudo.png';
import codigoqr from '../../assets/images/codigo-qr.png';
import iconofs from '../../assets/images/facebook.png';
import iconotw from '../../assets/images/twitter';
import iconoin from '../../assets/images/instagram.png';
import style from '../Footer/Footer.module.css';

const Footer = () => {
  return (
    <>
      <hr className={style.linea} />
      <footer className={style.containerFooter}>
        <div className={style.infoFooter1}>
          <img className={style.logoNegro} src={logoNegro} alt='logo pufi color negro' />
        </div>
        <div className={style.infoFooter2}>
          <a href='#pufiPuff'>PUFI PUFF</a>
          <a href='#PufiRain'>PUFI RAIN</a>
          <a href='#PufiCar'>PUFI CART</a>
          <a href='#PufiNap'>PUFI NAP</a>
        </div>
        <div className={style.infoFooter3}>
          <a href='/Carousel'>CONTACTO</a>
          <a href='/Carousel'>AYUDA</a>
          <a href='/Carousel'>COMO COMPRAR</a>
          <a href='/Carousel'>TERMINOS Y CONDICIONES</a>
        </div>
        <div className={style.infoFooter4}>
          <p className={style.infoCompra}> COMPRA 100% SEGURA</p>
          <p className={style.infoCompra1}>
            <img className={style.codigoqr} src={codigoqr} alt='escudo de proteccion' /> <img className={style.escudo} src={escudo} alt='' />
            COMPRA CON LA GARANTIA DE PUFI
          </p>
        </div>
        <div>
          <h6 className={style.siguenos}>
            SEGUINOS EN <img className={style.redesSociales} src={iconofs} alt='icono de facebook' />
            <img className={style.redesSociales} src={iconotw} alt='icono de twitter' />
            <img className={style.redesSociales} src={iconoin} alt='icono de instagram' />
          </h6>
        </div>
        <hr className={style.linea2} />
      </footer>
    </>
  );
};

export default Footer;
