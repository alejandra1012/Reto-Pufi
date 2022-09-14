import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import arrowRight from '../../assets/images/arrowRight.png';
import style from '../EspufApi/EspufApi.module.css';

function ContactForm() {
  const [state, handleSubmit] = useForm('mzbwdlld');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className={style.containerForm}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.emailyButton}>
          <input id='email' type='email' name='email' placeholder='Ingresa tu email' />
          <button type='submit' disabled={state.submitting}>
            <img className={style.flecha} src={arrowRight} alt='' />
          </button>
        </div>
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </form>
    </div>
  );
}

export default ContactForm;
