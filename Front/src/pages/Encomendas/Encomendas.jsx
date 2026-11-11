import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Botao from '../../components/Botao/Botao';
import { listarEncomendas, excluirEncomenda } from '../../services/encomendaService';
import './Encomendas.css';

function formatarData(data) {
  // "2026-11-20" -> "20/11/2026"
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
}

function Encomendas() {
  const [encomendas, setEncomendas] = useState([]);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    buscarEncomendas();
  }, []);

  async function buscarEncomendas() {
    try {
      const dados = await listarEncomendas();
      setEncomendas(dados);
      setErro('');
    } catch {
      setErro('Não foi possível carregar as encomendas. O back-end está rodando?');
    }
  }

  async function excluir(encomenda) {
    const confirmou = window.confirm(
      `Excluir a encomenda de ${encomenda.enc_cliente} (${encomenda.enc_produto})?`
    );
    if (!confirmou) return;

    try {
      await excluirEncomenda(encomenda.enc_id);
      buscarEncomendas();
    } catch {
      setErro('Erro ao excluir a encomenda.');
    }
  }

  return (
    <section>
      <div className="encomendas-topo">
        <h2>Encomendas cadastradas</h2>
        <Botao texto="+ Nova encomenda" onClick={() => navigate('/encomendas/nova')} />
      </div>

      {erro && <p className="encomendas-erro">{erro}</p>}

      {!erro && encomendas.length === 0 && (
        <p>Nenhuma encomenda cadastrada ainda.</p>
      )}

      {encomendas.length > 0 && (
        <div className="tabela-container">
          <table className="tabela">
            <thead>
              <tr>
                <th>#</th>
                <th>Cliente</th>
                <th>Produto</th>
                <th>Qtd.</th>
                <th>Entrega</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {encomendas.map((encomenda) => (
                <tr key={encomenda.enc_id}>
                  <td>{encomenda.enc_id}</td>
                  <td>
                    {encomenda.enc_cliente}
                    {encomenda.enc_telefone && (
                      <small className="telefone">{encomenda.enc_telefone}</small>
                    )}
                  </td>
                  <td>{encomenda.enc_produto}</td>
                  <td>{encomenda.enc_quantidade}</td>
                  <td>{formatarData(encomenda.enc_data_entrega)}</td>
                  <td>
                    <span className={`status status-${encomenda.enc_status.replace(' ', '-').toLowerCase()}`}>
                      {encomenda.enc_status}
                    </span>
                  </td>
                  <td className="acoes">
                    <Botao
                      texto="Editar"
                      variante="secundario"
                      onClick={() => navigate(`/encomendas/editar/${encomenda.enc_id}`)}
                    />
                    <Botao texto="Excluir" variante="perigo" onClick={() => excluir(encomenda)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default Encomendas;
