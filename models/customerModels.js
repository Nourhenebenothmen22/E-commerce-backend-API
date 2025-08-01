const mongoose = require('mongoose');
const User = require('./userModel');

const customerSchema = new mongoose.Schema({
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  picture: {
    type: String, // URL ou chemin de la photo
  },
  cin: {
    type: String, // Numéro de carte d'identité
    required: true,
    unique: true,
  },
});

// Déclaration du discriminant
const Customer = User.discriminator('Customer', customerSchema);

module.exports = Customer;
