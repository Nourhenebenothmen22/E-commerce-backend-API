const mongoose = require('mongoose');
const User = require('./userModel');

const providerSchema = new mongoose.Schema({
  matricule: {
    type: String,
  },
  company: {
    type: String,
  },
}, { timestamps: true });
// Déclaration du discriminant
const Provider = User.discriminator('Provider', providerSchema);

module.exports = Provider;
