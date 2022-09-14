import React from 'react';
import bolso from '../../assets/images/bolso.png';
import pufiCart from '../../assets/images/PufiCart.png';
import style from '../PufiCar/PufiCar.module.css';
const PufiCar = () => {
  return (
    <div className={style.container}>
      <div>
        <img src={bolso} alt='' />
        <h2>pufi CART</h2>
        <h6>Descripcion del producto</h6>
        <a href='/'>VER MAS</a>
      </div>
      <div>
        <img src={pufiCart} alt='pufi en la playa' />
      </div>
    </div>
  );
};

export default PufiCar;
