import React from 'react';
import puffNa from '../../assets/images/puffNa.jpg';
import iconoMayor from '../../assets/images/mayorQ.png';
import style from '../PufiNap/PufiNap.module.css';

const PufiNap = () => {
  return (
    <div id='PufiNap' className={style.container4}>
      <div className={style.imgPufiNap}></div>
      <div className={style.infoPufiNap}>
        <img className={style.almohada} src={puffNa} alt='' />
        <h2>pufi NAP</h2>
        <hr />
        <h6>Descripcion del producto</h6>
        <a href='/'>
          <img className={style.mayorQ} src={iconoMayor} alt='' /> VER MAS
        </a>
      </div>
    </div>
  );
};

export default PufiNap;
