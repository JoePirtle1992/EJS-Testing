const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    author: String
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;