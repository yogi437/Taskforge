const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
module.exports = mongoose.model('Project', projectSchema);