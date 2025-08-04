const express = require('express');
const router = express.Router();
const{register, login} = require('../controllers/userControllers');
// Enregistrer un nouvel utilisateur (POST /api/users/register)
router.post('/register',register);
// Connexion d'un utilisateur (POST /api/users/login)
router.post('/login',login);
module.exports = router;