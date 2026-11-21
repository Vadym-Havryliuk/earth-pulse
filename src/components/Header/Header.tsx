import { useState } from "react";
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [dark, setDark] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <span className="logo__mark" />
        <span className="logo__text">Earth Pulse</span>
      </div>

      <nav className="nav" aria-label="Меню">
        <NavLink to="/" className="nav__link">Live-карта</NavLink>
        <NavLink to="/timeline" className="nav__link">Таймлайн</NavLink>
        <NavLink to="/compare" className="nav__link">Порівняння</NavLink>
        <NavLink to="/alerts" className="nav__link">Сповіщення</NavLink>
        <NavLink to="/archive" className="nav__link">Архів</NavLink>
        <NavLink to="/learn" className="nav__link">Освіта</NavLink>
        <NavLink to="/data" className="nav__link">Про дані</NavLink>
      </nav>

      <button 
        className="theme-btn" 
        aria-label="Перемкнути тему"
        aria-pressed={dark}
        onClick={() => setDark(!dark)}>
      </button>
    </header>
  );
}

export default Header;