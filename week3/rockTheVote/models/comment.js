const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Comment Schema
const commentSchema = new Schema({
    comment: {
        type: String
    },
    likes: {
        type: Number,
        default: null
    },
    replies: [
        { body: String }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Comment', commentSchema);