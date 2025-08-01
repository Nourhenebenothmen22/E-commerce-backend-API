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
  const id = req.params.id;
  try {
    const updated = await Admin.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    }).select('-password');

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }

    res.status(200).json({ success: true, message: 'Admin updated', data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating admin' });
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
    const count = await adminModel.countDocuments();
    res.status(200).json({ success: true, totalAdmins: count });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error counting admins' });
  }
};
