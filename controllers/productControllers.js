const Product = require("../models/productModel");
(exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product not added" + error.message,
      data: null,
    });
  }
}),
  (exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
      if (!deletedProduct) {
        return res.status(404).json({ 
            success: false,
            message: "Product not found" });
      }

      res.status(200).json({
        success: true,
        message: "Produit supprimé avec succès",
        data: deletedProduct,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erreur serveur lors de la suppression du produit",
        error: error.message,
      });
    }
  });
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des produits",
      error: error.message,
    });
  }
}
exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const updateData = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updateData,
      {
        new: true,           // Retourne le produit après mise à jour
        runValidators: true  // Applique les validations Mongoose
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Produit introuvable",
      });
    }

    res.status(200).json({
      success: true,
      message: "Produit mis à jour avec succès",
      data: updatedProduct,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la mise à jour du produit",
      error: error.message,
    });
  }
};
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
        return res.status(404).json({
            success: false,
            message: "Produit non trouvé",
        });
        }
        res.status(200).json({
        success: true,
        data: product,
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "Erreur lors de la récupération du produit",
        error: error.message,
        });
    }
},
exports.couterProducts = async (req, res) => {
    try {
        const count = await Product.countDocuments();
        res.status(200).json({
            success: true,
            count: count,
            message: "Total number of products",
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Erreur lors du comptage des produits",
            error: error.message,
        });
        
    }
},
exports.searchProducts = async (req, res) => {
    const { query } = req.query;
    try {
        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } }, // Recherche insensible à la casse
                { description: { $regex: query, $options: 'i' } }
            ]
        });

        if (products.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Aucun produit trouvé",
            });
        }

        res.status(200).json({
            success: true,
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Erreur lors de la recherche de produits",
            error: error.message,
        });
    }
}
