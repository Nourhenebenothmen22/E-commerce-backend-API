const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getUserProfile,
  getAllUsers
} = require('../controllers/userControllers');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/:id', authMiddleware, getUserProfile);
router.get('/', getAllUsers);

module.exports = router;