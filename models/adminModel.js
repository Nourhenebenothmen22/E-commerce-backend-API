const mongoose = require('mongoose');
// 📦 Importation des modules
const User= require('./userModel');
userModel.discriminator('Admin',adminSchema)
module.exports = mongoose.model('Admin');