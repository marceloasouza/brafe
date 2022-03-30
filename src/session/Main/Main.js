import React from 'react';
import './Main.css';
import cafe1 from '../../Assets/cafe-1.jpg';
import cafe2 from '../../Assets/cafe-2.jpg';

const Main = () => {
  return (
    <section class="main">
		<h2>Uma Mistura de</h2>
		<div class="main-container animeLeft">
			<div class="about-item">
				<img src={cafe1} alt="Café com Amor" />
				<h3>amor</h3>
			</div>
			<div class="about-item">
				<img src={cafe2} alt="Cafe com perfeição" />
				<h3>perfeição</h3>
			</div>
		</div>
		<p>O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. 
			É servido tradicionalmaente quente, mas também pode ser consumido gelado. 
			Ele é um estimulante, por possuir cafeína — geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação.</p>
	</section>
  )
}

export default Main