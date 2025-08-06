const express = require('express');
const router = express.Router();
const {
  addAdmin,
  deleteAdmin,
  listAdmins,
  updateAdmin,
  getAdminById,
  countAdmins  
} = require('../controllers/adminControllers'); // Chemin complet ajouté
const authMiddleware = require('../middleware/authMiddleware'); 

// Appliquez authMiddleware uniquement aux routes nécessaires
router.post('/add', authMiddleware, addAdmin);
router.get('/count', countAdmins); // Pas de middleware nécessaire
router.get('/list', listAdmins);
router.delete('/delete/:id', authMiddleware, deleteAdmin);
router.put('/update/:id', authMiddleware, updateAdmin);
router.get('/:id', authMiddleware, getAdminById);

module.exports = router;