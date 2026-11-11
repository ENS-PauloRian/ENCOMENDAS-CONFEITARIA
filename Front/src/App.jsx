import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Encomendas from './pages/Encomendas/Encomendas';
import CadastroEncomenda from './pages/CadastroEncomenda/CadastroEncomenda';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encomendas" element={<Encomendas />} />
          <Route path="/encomendas/nova" element={<CadastroEncomenda />} />
          <Route path="/encomendas/editar/:id" element={<CadastroEncomenda />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
