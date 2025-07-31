const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

exports.register = async (req, res) => {
  try {
    const { fullname, email, password, phone } = req.body;

    // Vérifier si l'email est déjà utilisé
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: 'fail',
        message: 'User already exists with this email',
      });
    }

    // Créer un utilisateur (le hash sera appliqué automatiquement par le pre('save'))
    const newUser = new userModel({
      fullname,
      email,
      password,
      phone
    });

    await newUser.save();

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        phone: newUser.phone
      }
    });

  } catch (error) {
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
                message: 'Invalid email or password',
            });
        }

        // Comparer le mot de passe avec le hash dans la base de données
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                status: 'fail',
                message: 'Invalid email or password',
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Login successful',
            user,
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server error',
            error: error.message
        });
    }
};
