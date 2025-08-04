// routes/customerRoutes.js

const express = require('express');
const router = express.Router();
const {
  addCustomer,
  deleteCustomer,
  updateCustomer,
  getCustomerById,
  getAllCustomers
} = require('../controllers/customerControllers');

// ➕ Ajouter un client
router.post('/', addCustomer);

// 🔁 Mettre à jour un client par ID
router.put('/:id', updateCustomer);

// ❌ Supprimer un client par ID
router.delete('/:id', deleteCustomer);

// 🔍 Obtenir un client par ID
router.get('/:id', getCustomerById);

// 📄 Obtenir tous les clients
router.get('/', getAllCustomers);

module.exports = router;
