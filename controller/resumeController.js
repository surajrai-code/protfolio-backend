const Resume = require('../models/resumeModels');

exports.uploadResume = async (req, res) => {
    try {
        const filename = req.file.filename;
        const resume = new Resume({ filename });
        await resume.save();
        res.status(201).json(resume);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getResume = async (req, res) => {
    try {
        const filename = req.params.filename;
        const resume = await Resume.findOne({ filename });
        if (!resume) {
            throw new Error('Resume not found');
        }
        res.sendFile(path.join(__dirname, '../uploads/resumes/', filename));
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};