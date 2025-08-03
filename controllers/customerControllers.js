const customerModel = require('../models/customerModel');

exports.addCustomer = async (req, res) => {
  try {
    const customer = new customerModel(req.body);
    await customer.save();
    return res.status(201).json({  // Il faut indiquer un code de statut (201 pour création)
      success: true,
      message: 'Customer added successfully',
      data: customer
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Customer not added',
      error: error.message
    });
  }
};
exports.deleteCustomer = async (req, res) => {
  try {
    const deleted = await customerModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Customer not found' });
    }
    return res.status(200).json({ success: true, message: 'Customer deleted successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error deleting customer', error: error.message });
  }
};
exports.updateCustomer = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  try {
    const updated = await customerModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).select('-password'); // Exclure le mot de passe
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Customer not found' });
    }
    return res.status(200).json({ success: true, message: 'Customer updated', data: updated });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error updating customer', error: error.message });
  }
};
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await customerModel.findById(req.params.id).select('-password'); // Exclure le mot de passe
    if (!customer) {
      return res.status(404).json({ success: false, message: 'Customer not found' });
    }
    return res.status(200).json({ success: true, data: customer });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error fetching customer', error: error.message });
  }
};
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await customerModel.find().select('-password'); // Exclure le mot de passe
    return res.status(200).json({ success: true, data: customers });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error fetching customers', error: error.message });
  }
};