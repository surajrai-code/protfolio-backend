const express = require('express');
const router = express.Router();
const workController = require('../controller/workController');

// Create a new work experience
router.post('/work', workController.createWorkExperience);

// Get all work experiences
router.get('/work', workController.getAllWorkExperiences);

// Update a work experience by ID
router.put('/work/:id', workController.updateWorkExperience);

// Delete a work experience by ID
router.delete('/work/:id', workController.deleteWorkExperience);

module.exports = router;