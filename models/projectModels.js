const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,

  },
  imageUrl: {
    type: String
  },
  technologies: {
    type: String
  } ,
  sourceCodeUrl: {
    type: String
  },
  liveDemoUrl: {
    type: String
  },
});

module.exports = mongoose.model('Project', projectSchema);
