import React from 'react';
import ButtonLong from '../../Components/Button/ButtonLong';
import './Flavors.css';

const Flavors = () => {
  return (
    <section className='flavors'>
      <div className='flavors-container container'>
        <div className='produtos-item'>
          <h2 className='paulista'>Paulista</h2>
          <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará</p>
        </div>
        <div className='produtos-item'>
          <h2 className='carioca'>Carioca</h2>
          <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará</p>
        </div>
        <div className='produtos-item'>
          <h2 className='mineiro'>Mineiro</h2>
          <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará</p>
        </div>
      </div>
      <ButtonLong />
    </section>
  )
}

export default Flavors