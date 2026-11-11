import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormEncomenda from '../../components/FormEncomenda/FormEncomenda';
import {
  buscarEncomenda,
  cadastrarEncomenda,
  alterarEncomenda,
} from '../../services/encomendaService';
import './CadastroEncomenda.css';

// Esta página serve para CADASTRAR (/encomendas/nova)
// e para ALTERAR (/encomendas/editar/:id)
function CadastroEncomenda() {
  const { id } = useParams();
  const editando = Boolean(id);
  const navigate = useNavigate();

  const [encomenda, setEncomenda] = useState(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    if (!editando) return;

    buscarEncomenda(id)
      .then(setEncomenda)
      .catch(() => setErro('Encomenda não encontrada.'));
  }, [id, editando]);

  async function salvar(dados) {
    try {
      if (editando) {
        await alterarEncomenda(id, dados);
      } else {
        await cadastrarEncomenda(dados);
      }
      navigate('/encomendas');
    } catch {
      setErro('Erro ao salvar. Confira os dados e se o back-end está rodando.');
    }
  }

  return (
    <section className="cadastro">
      <h2>{editando ? `Editar encomenda #${id}` : 'Nova encomenda'}</h2>

      {erro && <p className="cadastro-erro">{erro}</p>}

      {editando && !encomenda && !erro && <p>Carregando...</p>}

      {(!editando || encomenda) && (
        <FormEncomenda
          key={encomenda ? encomenda.enc_id : 'nova'}
          dadosIniciais={encomenda}
          onSalvar={salvar}
          onCancelar={() => navigate('/encomendas')}
        />
      )}
    </section>
  );
}

export default CadastroEncomenda;
