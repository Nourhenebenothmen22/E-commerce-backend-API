const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { fullname, email, password, phone } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: 'fail',
        message: 'User already exists with this email',
      });
    }

    // Créer le nouvel utilisateur avec le mot de passe hashé
    const newUser = await userModel.create({
      fullname,
      email,
      password,
      phone
    });

    // Création du token JWT
    const token = jwt.sign(
      { id: newUser._id.toString() }, // Conversion en string
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Renvoi de la réponse
    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      token,
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        phone: newUser.phone
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
      error: error.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid credentials',
      });
    }

    // Comparer le mot de passe avec le hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid credentials',
      });
    }

    // Générer le token JWT (même format que register)
    const token = jwt.sign(
      { id: user._id.toString() }, // Conversion en string
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Renvoyer la réponse
    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        phone: user.phone
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
      error: error.message
    });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await userModel.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ 
        status: 'fail', 
        message: 'User not found' 
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'User profile fetched successfully',
      user
    });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
      error: error.message
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().select('-password');

    res.status(200).json({
      status: 'success',
      count: users.length,
      users,
    });
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
      error: error.message,
    });
  }
};