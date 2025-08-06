const express = require('express');
const router = express.Router();
const{addAdmin, deleteAdmin, listAdmins, updateAdmin, getAdminById,countAdmins} = require('../controllers/adminControllers');
const authMiddleware = require('../middleware/authMiddleware');
router.post('/add', addAdmin);
router.delete('/delete/:id', deleteAdmin);
router.get('/list',authMiddleware, listAdmins);
router.put('/update/:id', updateAdmin);
router.get('/:id', getAdminById);
router.get('/count',countAdmins)
module.exports = router;