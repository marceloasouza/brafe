import React from 'react';
import './Stores.css';
import iguatemi from '../../Assets/iguatemi.jpg';
import botafogo from '../../Assets/botafogo.jpg';
import mineirao from '../../Assets/mineirao.jpg';
import Button from '../../Components/Button/Button';

const Stores = () => {
  return (
    <section className='stores container'>
        <div className='stores-container'>
              <div className='items-img'>
                <img src={iguatemi} alt="Loja Iguatemi" />
              </div>    
              <div className='items-info'>
                <h2>Iguatemi</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, 
                  tentou-se o cultivo.</p>
                <Button />  
              </div>
        </div>
        <div className='stores-container'>
              <div className='items-img'>
                <img src={botafogo} alt="Loja Botafogo" />
              </div>    
              <div className='items-info'>
                <h2>Botafogo</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.</p>
                <Button /> 
              </div>
        </div>
        <div className='stores-container'>
              <div className='items-img'>
                <img src={mineirao} alt="Loja Mineirão" />
              </div>    
              <div className='items-info'>
                <h2>Paulista</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.</p>
                <Button /> 
              </div>
        </div>
    </section>
  )
}

export default Stores