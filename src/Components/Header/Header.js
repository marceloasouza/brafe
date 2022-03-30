import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  
  return (
    <header className='header'>
      
      <div className='header-container container'>
        <div className='logo'>
          <NavLink to="/" end>Brafé</NavLink>
        </div>
        <nav className='nav'>
          <ul>
            <li><NavLink to="/sobre">Sobre</NavLink></li>
            <li><NavLink to="/Produtos">Produtos</NavLink></li>
            <li><NavLink to="/Portfólio">Portfólio</NavLink></li>
            <li><NavLink to="/Contato">Contato</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header