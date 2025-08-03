const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    stock: {
        type: Number
    },

    rating: {
        type: Number,
    }
}, {
    timestamps: true // Ajoute des champs createdAt et updatedAt
});