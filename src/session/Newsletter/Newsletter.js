import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className='news container'>
        <div className='signit'>
          <h2>Assine nossa Newsletter</h2>
          <p>promoção e eventos mensais</p>
        </div>
        <form>
          <label>E-mail</label>
          <input type="text" placeholder='Digite seu e-mail'></input>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter