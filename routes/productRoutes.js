const express = require('express');
const router = express.Router();
const{addProduct, deleteProduct, listProducts, updateProduct, getProductById, couterProducts, searchProducts} = require('../controllers/productControllers');

// Ajouter un produit (POST /api/products)
router.post('/',addProduct);

// Lister tous les produits (GET /api/products)
router.get('/',listProducts);

// Récupérer un produit par son ID (GET /api/products/:id)
router.get('/:id',getProductById);

// Mettre à jour un produit (PUT /api/products/:id)
router.put('/:id',updateProduct);

// Supprimer un produit (DELETE /api/products/:id)
router.delete('/:id',deleteProduct);

// Compter le nombre total de produits (GET /api/products/count)
router.get('/count',couterProducts);

// Rechercher des produits par mot-clé (GET /api/products/search?query=...)
router.get('/search',searchProducts);

module.exports = router;
