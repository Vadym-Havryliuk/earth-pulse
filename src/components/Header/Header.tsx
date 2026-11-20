import { useState } from "react";

import './Header.css';

type NavItem = { id: string; label: string };

const nav: NavItem[] = [
  { id: "map", label: "Live-карта" },
  { id: "timeline", label: "Таймлайн" },
  { id: "compare", label: "Порівняння" },
  { id: "alerts", label: "Сповіщення" },
  { id: "archive", label: "Архів" },
  { id: "learn", label: "Освіта" },
  { id: "data", label: "Про дані" },
];

const Header = () => {
  const [active, setActive] = useState("map");
  const [dark, setDark] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <span className="logo__mark" />
        <span className="logo__text">Earth Pulse</span>
      </div>

      <nav className="nav" aria-label="Меню">
        { nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="nav__link"
            aria-current={active === item.id ? "page" : undefined}
            onClick={() => setActive(item.id)}
          >
            {item.label}
          </a>
        )) }
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