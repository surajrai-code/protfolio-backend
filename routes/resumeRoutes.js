const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const resumeController = require('../controller/resumeController');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/resumes');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('resume'), resumeController.uploadResume);
router.get('/resume/:filename', resumeController.getResume);

module.exports = router;