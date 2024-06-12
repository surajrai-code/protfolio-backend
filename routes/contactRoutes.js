const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

// Create a contact
router.post('/contact', contactController.saveContactForm);

// Delete a contact by ID
router.delete('/contact/:id', contactController.deleteSaveData);

module.exports = router;
