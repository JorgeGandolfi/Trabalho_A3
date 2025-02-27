const express = require('express');
const router = express.Router();
const { getAllClientes, getClienteById, createCliente, updateCliente, deleteCliente } = require('../controllers/clientesController');

// Definição das rotas
router.get('/', getAllClientes);
router.get('/:id', getClienteById);
router.post('/', createCliente);
router.put('/:id', updateCliente);
router.delete('/:id', deleteCliente);

module.exports = router;
