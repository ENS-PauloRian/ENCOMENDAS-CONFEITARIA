const Encomenda = require('../models/Encomenda');

// GET /encomendas
async function listar(req, res) {
  try {
    const encomendas = await Encomenda.findAll({
      order: [['enc_data_entrega', 'ASC']],
    });
    res.json(encomendas);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao listar encomendas.' });
  }
}

// GET /encomendas/:id
async function buscarPorId(req, res) {
  try {
    const encomenda = await Encomenda.findByPk(req.params.id);
    if (!encomenda) {
      return res.status(404).json({ erro: 'Encomenda não encontrada.' });
    }
    res.json(encomenda);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao buscar encomenda.' });
  }
}

// POST /encomendas
async function cadastrar(req, res) {
  try {
    const encomenda = await Encomenda.create(req.body);
    res.status(201).json(encomenda);
  } catch (erro) {
    res.status(400).json({ erro: 'Dados inválidos.', detalhes: erro.message });
  }
}

// PUT /encomendas/:id
async function alterar(req, res) {
  try {
    const encomenda = await Encomenda.findByPk(req.params.id);
    if (!encomenda) {
      return res.status(404).json({ erro: 'Encomenda não encontrada.' });
    }
    await encomenda.update(req.body);
    res.json(encomenda);
  } catch (erro) {
    res.status(400).json({ erro: 'Dados inválidos.', detalhes: erro.message });
  }
}

// DELETE /encomendas/:id
async function excluir(req, res) {
  try {
    const encomenda = await Encomenda.findByPk(req.params.id);
    if (!encomenda) {
      return res.status(404).json({ erro: 'Encomenda não encontrada.' });
    }
    await encomenda.destroy();
    res.status(204).send();
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao excluir encomenda.' });
  }
}

module.exports = { listar, buscarPorId, cadastrar, alterar, excluir };
