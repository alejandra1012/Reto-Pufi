import React from 'react';
import puff from '../../assets/images/puff1.png';
import iconoMayor from '../../assets/images/mayorQ.png';
import style from '../PufiPuff/PufiPuff.module.css';

const PufiPuff = () => {
  return (
    <div id='pufiPuff' className={style.container1}>
      <div className={style.infoPufiPuff}>
        <img className={style.puff} src={puff} alt='' />
        <h2>pufi PUFF</h2>
        <hr />
        <h6>Descripción del producto</h6>
        <a href='/'>
          <img className={style.mayorQ} src={iconoMayor} alt='' /> VER MAS
        </a>
      </div>
      <div className={style.imgPufiPuff}></div>
    </div>
  );
};

export default PufiPuff;
