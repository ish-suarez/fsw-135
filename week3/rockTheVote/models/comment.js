const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Comment Schema
const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: 'Issue',
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: null
    },
    replies: [
        { body: String }
    ],
    date: {
        Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Comment', commentSchema);