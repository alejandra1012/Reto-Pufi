import React from 'react';
import style from '../Collage/Collage.module.css';
import pufiPlaya from '../../assets/images/pufiPlaya.jpg';
import pufiRain from '../../assets/images/pufiRain.jpg';
import PufiCart from '../../assets/images/PufiCart.png';
import pufiNap from '../../assets/images/pufiNap.webp';
import family from '../../assets/images/family.jpg';
import arena from '../../assets/images/arena.jpg';
const Collage = () => {
  return (
    <>
      <div className={style.containerCollage}>
        <h5>INSTAGRAM</h5>
        <h2 className={style.espufi}>#ESPUFI</h2>
        <section className={style.imgCollage}>
          <img src={pufiPlaya} alt='pufiPlaya' />
          <img src={pufiRain} alt='pufiRain' />
          <img src={PufiCart} alt='pufiCart' />
          <img src={pufiNap} alt='pufiNap' />
          <img src={family} alt='family' />
          <img src={arena} alt='arena' />
        </section>
        <h5>NEWSLETTER</h5>
        <h2 className={style.suscrib}>SUSCRIBITE</h2>
        <h6>y enterate de todas las novedades</h6>
      </div>
    </>
  );
};

export default Collage;
