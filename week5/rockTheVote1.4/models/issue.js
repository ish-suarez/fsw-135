const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Issue Schema
const issueSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },   
    issue: {
        type: String,
        required: true
    },
    upVotes:  {
        type: Number,
        default: 0,
        required: true
    },
    downVotes: {
        type: Number,
        default: 0,
        required: true
    },
    replies: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }      
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Issue', issueSchema);