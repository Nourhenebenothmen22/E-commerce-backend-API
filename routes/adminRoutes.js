const express = require('express');
const router = express.Router();
const{addAdmin, deleteAdmin, listAdmins, updateAdmin, getAdminById,countAdmins} = require('../controllers/adminControllers');
router.post('/add', addAdmin);
router.delete('/delete/:id', deleteAdmin);
router.get('/list', listAdmins);
router.put('/update/:id', updateAdmin);
router.get('/:id', getAdminById);
router.get('/count',countAdmins)
module.exports = router;