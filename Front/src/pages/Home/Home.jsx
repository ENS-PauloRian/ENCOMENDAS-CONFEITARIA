import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <h2>Bem-vindo ao controle de encomendas</h2>
      <p>
        Cadastre, consulte, altere e exclua as encomendas da confeitaria de forma
        simples e organizada.
      </p>
      <div className="home-atalhos">
        <Link to="/encomendas" className="home-card">📋 Ver encomendas</Link>
        <Link to="/encomendas/nova" className="home-card">➕ Nova encomenda</Link>
      </div>
    </section>
  );
}

export default Home;
