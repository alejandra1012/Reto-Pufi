import React from 'react';
import pufiRain from '../../assets/images/pufiRain.jpg';
import umbrella from '../../assets/images/umbrella.jpg';
import style from '../PufiRain/PufiRain.module.css';

const PufiRain = () => {
  return (
    <div className={style.container}>
      <div>
        <img src={pufiRain} alt='pufi en la playa' />
      </div>
      <div>
        <img src={umbrella} alt='' />
        <h2>pufi RAIN</h2>
        <h6>Descripcion del producto</h6>
        <a href='/'>VER MAS</a>
      </div>
    </div>
  );
};

export default PufiRain;
