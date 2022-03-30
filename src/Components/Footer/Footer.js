import React from 'react'
import './Footer.css';
import brafe from '../../Assets/brafe.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container container'>
        <div className='info'>
          <p>Mcl Solution. Alguns direitos reservados<br />
          Rua quinze, 150 - São Paulo - SP</p>
        </div>
        <div className='brand'>
          <img src={brafe} alt="Brafé" />
        </div>
      </div>
    </div>
  )
}

export default Footer