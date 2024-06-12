const mongoose = require('mongoose');

const workExprince = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: false
    }

})
module.exports = mongoose.model('Work', workExprince);