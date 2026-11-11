import API_URL from './api.js';

const URL = `${API_URL}/encomendas`;

export async function listarEncomendas() {
  const resposta = await fetch(URL);
  if (!resposta.ok) throw new Error('Erro ao listar encomendas');
  return resposta.json();
}

export async function buscarEncomenda(id) {
  const resposta = await fetch(`${URL}/${id}`);
  if (!resposta.ok) throw new Error('Encomenda não encontrada');
  return resposta.json();
}

export async function cadastrarEncomenda(encomenda) {
  const resposta = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(encomenda),
  });
  if (!resposta.ok) throw new Error('Erro ao cadastrar encomenda');
  return resposta.json();
}

export async function alterarEncomenda(id, encomenda) {
  const resposta = await fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(encomenda),
  });
  if (!resposta.ok) throw new Error('Erro ao alterar encomenda');
  return resposta.json();
}

export async function excluirEncomenda(id) {
  const resposta = await fetch(`${URL}/${id}`, { method: 'DELETE' });
  if (!resposta.ok) throw new Error('Erro ao excluir encomenda');
}
