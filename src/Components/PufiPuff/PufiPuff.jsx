import React from 'react';
import pufiPlaya from '../../assets/images/pufiPlaya.jpg';
import puff from '../../assets/images/puff1.png';
import style from '../PufiPuff/PufiPuff.module.css';

const PufiPuff = () => {
  return (
    <div className={style.container1}>
      <div>
        <img className='puff' src={puff} alt='' />
        <h2>pufi PUFF</h2>
        <h6>Descripcion del producto</h6>
        <a href='/'>VER MAS</a>
      </div>
      <div>
        <img src={pufiPlaya} alt='pufi en la playa' />
      </div>
    </div>
  );
};

export default PufiPuff;
