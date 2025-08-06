const adminModel=require('../models/adminModel');
exports.addAdmin = async (req, res) => {
  try {
    const admin=await adminModel(req.body)
    await admin.save()
    res.status(201).json({
      success: true,
      message: 'Admin added successfully',
      data: admin
    });
    } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Admin not added',
      data: null
    });
}}
exports.deleteAdmin = async (req, res) => {
  try {
    const deleted = await adminModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }
    res.status(200).json({ success: true, message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting admin' });
  }
};

exports.listAdmins = async (req, res) => {
  try {
    const admins = await adminModel.find().select('-password');
    res.status(200).json({ success: true, data: admins });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching admins' });
  }
};

exports.updateAdmin = async (req, res) => {
  const { id } = req.params;
  
  // 1. Vérifier la présence des données
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      message: "No data provided for update"
    });
  }

  try {
    // 2. Utiliser adminModel et req.body
    const updated = await adminModel.findByIdAndUpdate(
      id,
      req.body, // ← Correction ici
      {
        new: true,
        runValidators: true
      }
    ).select('-password');

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Admin not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Admin updated',
      data: updated
    });
    
  } catch (error) {
    // 3. Ajouter des logs pour le débogage
    console.error("Update error:", error);
    
    res.status(500).json({
      success: false,
      message: 'Error updating admin',
      error: error.message // ← Retourner l'erreur réelle
    });
  }
}
exports.getAdminById = async (req, res) => {
  try {
    const admin = await adminModel.findById(req.params.id).select('-password');
    if (!admin) {
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }
    res.status(200).json({ success: true, data: admin });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving admin' });
  }
};
exports.countAdmins = async (req, res) => {
  try {
    console.log("Tentative de comptage des admins...");
    const count = await adminModel.countDocuments();
    console.log(`Nombre d'admins trouvés: ${count}`);
    res.status(200).json({ success: true, totalAdmins: count });
  } catch (error) {
    console.error("Erreur de comptage:", error);
    res.status(500).json({ 
      success: false, 
      message: 'Error counting admins',
      error: error.message // Ajoutez le message d'erreur
    });
  }
};
