const Work=require('../models/workExprince');

// Create work experience
exports.createWorkExperience = async (req, res) => {
    try {
        const workExp = new Work(req.body);
        await workExp.save();
        res.status(201).json(workExp);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read all work experiences
exports.getAllWorkExperiences = async (req, res) => {
    try {
        const workExps = await Work.find();
        res.json(workExps);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Update a work experience by ID
exports.updateWorkExperience = async (req, res) => {
    try {
        const workExp = await Work.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workExp) {
            return res.status(404).json({ message: 'Work experience not found' });
        }
        res.json(workExp);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a work experience by ID
exports.deleteWorkExperience = async (req, res) => {
    try {
        const workExp = await Work.findByIdAndDelete(req.params.id);
        if (!workExp) {
            return res.status(404).json({ message: 'Work experience not found' });
        }
        res.json({ message: 'Work experience deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};