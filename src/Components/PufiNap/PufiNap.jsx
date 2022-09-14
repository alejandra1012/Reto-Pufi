import React from 'react';
import puffNa from '../../assets/images/puffNa.jpg';
import pufiNap from '../../assets/images/pufiNap.webp';
import style from '../PufiNap/PufiNap.module.css';

const PufiNap = () => {
  return (
    <div className={style.container}>
      <div>
        <img src={puffNa} alt='pufi en la playa' />
      </div>
      <div>
        <img src={pufiNap} alt='' />
        <h2>pufi NAP</h2>
        <h6>Descripcion del producto</h6>
        <a href='/'>VER MAS</a>
      </div>
    </div>
  );
};

export default PufiNap;
