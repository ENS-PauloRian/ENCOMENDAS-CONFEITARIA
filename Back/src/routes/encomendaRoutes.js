const express = require('express');
const controller = require('../controllers/encomendaController');

const router = express.Router();

router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.post('/', controller.cadastrar);
router.put('/:id', controller.alterar);
router.delete('/:id', controller.excluir);

module.exports = router;
