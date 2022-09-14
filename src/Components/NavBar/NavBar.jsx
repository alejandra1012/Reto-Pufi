import React from 'react';
import logoPufi from '../../assets/images/logoPufi.svg';
import sombrilla from '../../assets/images/sombrilla.png';
import puff from '../../assets/images/puff.png';
import bolsaCompra from '../../assets/images/bolsaCompra.png';
import almohada from '../../assets/images/almohada.png';
import '../NavBar/NavBar.css';
const NavBar = () => {
  return (
    <>
      <nav className='navbar fixed-top'>
        <div className='logoPufi'>
          <img className='logo' src={logoPufi} alt='' />
        </div>
        <div className='containerIcon'>
          <div className='iconos'>
            <a href='/'>
              <img src={puff} alt='incono puff' />
              PUFI PUFF
            </a>
          </div>
          <div className='iconos'>
            <a href='/'>
              <img src={sombrilla} alt='incono sombrilla' />
              PUFI RAIN
            </a>
          </div>
          <div className='iconos'>
            <a href='/'>
              <img src={bolsaCompra} alt='incono bolsa compra' />
              PUFI CART
            </a>
          </div>
          <div className='iconos final'>
            <a href='/'>
              <img src={almohada} alt='incono almohada' />
              PUFI NAP
            </a>
          </div>
        </div>
        <div className='miCuenta'>
          <select name='miCuenta' id='miCuenta'>
            <option value='miCuenta'>MI CUENTA</option>
          </select>
          <a href='/'>MI COMPRA</a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
