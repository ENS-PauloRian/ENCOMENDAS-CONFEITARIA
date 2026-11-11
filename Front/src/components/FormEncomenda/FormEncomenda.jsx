import { useState } from 'react';
import Botao from '../Botao/Botao';
import './FormEncomenda.css';

const VAZIO = {
  enc_cliente: '',
  enc_telefone: '',
  enc_produto: '',
  enc_quantidade: 1,
  enc_data_entrega: '',
  enc_status: 'Pendente',
};

function FormEncomenda({ dadosIniciais, onSalvar, onCancelar }) {
  const [form, setForm] = useState({ ...VAZIO, ...dadosIniciais });

  function alterarCampo(evento) {
    const { name, value } = evento.target;
    setForm({ ...form, [name]: value });
  }

  function enviar(evento) {
    evento.preventDefault();
    onSalvar({ ...form, enc_quantidade: Number(form.enc_quantidade) });
  }

  return (
    <form className="form-encomenda" onSubmit={enviar}>
      <label>
        Cliente *
        <input name="enc_cliente" value={form.enc_cliente} onChange={alterarCampo} required />
      </label>

      <label>
        Telefone
        <input name="enc_telefone" value={form.enc_telefone || ''} onChange={alterarCampo} />
      </label>

      <label>
        Produto *
        <input name="enc_produto" value={form.enc_produto} onChange={alterarCampo} required />
      </label>

      <div className="form-linha">
        <label>
          Quantidade *
          <input
            type="number"
            min="1"
            name="enc_quantidade"
            value={form.enc_quantidade}
            onChange={alterarCampo}
            required
          />
        </label>

        <label>
          Data de entrega *
          <input
            type="date"
            name="enc_data_entrega"
            value={form.enc_data_entrega}
            onChange={alterarCampo}
            required
          />
        </label>

        <label>
          Status
          <select name="enc_status" value={form.enc_status} onChange={alterarCampo}>
            <option>Pendente</option>
            <option>Em produção</option>
            <option>Entregue</option>
          </select>
        </label>
      </div>

      <div className="form-acoes">
        <Botao texto="Salvar" type="submit" />
        <Botao texto="Cancelar" variante="secundario" onClick={onCancelar} />
      </div>
    </form>
  );
}

export default FormEncomenda;
