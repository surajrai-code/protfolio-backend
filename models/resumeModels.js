const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    }
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;