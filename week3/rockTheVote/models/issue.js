const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Issue Schema
const issueSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Issue', issueSchema);