const mongoose = require('mongoose');
// 📦 Importation du modèle de base
const User = require('./userModel');
const adminSchema = new mongoose.Schema({

});

// 🧩 Création du discriminateur "Admin" basé sur User
const Admin = User.discriminator('Admin', adminSchema);

// ✅ On exporte le modèle discriminateur, pas un nouveau model mongoose
module.exports = Admin;

