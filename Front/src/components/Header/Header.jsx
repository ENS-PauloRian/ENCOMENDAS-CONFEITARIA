import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-titulo">🧁 Confeitaria — Encomendas</h1>
      <nav className="header-nav">
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/encomendas" end>Encomendas</NavLink>
        <NavLink to="/encomendas/nova">Nova encomenda</NavLink>
      </nav>
    </header>
  );
}

export default Header;
