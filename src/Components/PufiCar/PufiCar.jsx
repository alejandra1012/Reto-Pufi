import React from 'react';
import bolso from '../../assets/images/bolso.png';
import iconoMayor from '../../assets/images/mayorQ.png';
import style from '../PufiCar/PufiCar.module.css';
const PufiCar = () => {
  return (
    <div id='PufiCar' className={style.container3}>
      <div className={style.infoPufiCart}>
        <img className={style.bolso} src={bolso} alt='' />
        <h2>pufi CART</h2>
        <hr />
        <h6>Descripcion del producto</h6>
        <a href='/'>
          <img className={style.mayorQ} src={iconoMayor} alt='' /> VER MAS
        </a>
      </div>
      <div className={style.imgPufiCart}></div>
    </div>
  );
};

export default PufiCar;
