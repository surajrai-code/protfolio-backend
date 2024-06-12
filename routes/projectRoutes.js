const express = require('express');
const router = express.Router();
const projectController = require('../controller/projectController');

// Create a new project
router.post('/projects', projectController.createProject);

// Retrieve all projects
router.get('/projects', projectController.getProjects);

// Update a project by ID
router.put('/projects/:id', projectController.updateProject);

// Delete a project by ID
router.delete('/projects/:id', projectController.deleteProject);

module.exports = router;
