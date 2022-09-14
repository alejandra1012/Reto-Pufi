import React from 'react';
import umbrella from '../../assets/images/umbrella.jpg';
import iconoMayor from '../../assets/images/mayorQ.png';
import style from '../PufiRain/PufiRain.module.css';

const PufiRain = () => {
  return (
    <div id='PufiRain' className={style.container2}>
      <div className={style.imgPufiRain}>
        <button className='botonShop'>SHOP</button>
      </div>
      <div className={style.infoPufiRain}>
        <img className={style.umbrella} src={umbrella} alt='' />
        <h2>pufi RAIN</h2>
        <hr />
        <h6>Descripcion del producto</h6>
        <a href='/'>
          <img className={style.mayorQ} src={iconoMayor} alt='' /> VER MAS
        </a>
      </div>
    </div>
  );
};

export default PufiRain;
