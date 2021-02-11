const express = require('express');
const commentRouter = express.Router();
const Comment = require('../models/comment')


// Get All Comments 
commentRouter.get('/', (req, res, next) => {
    Comment.find((err, comments) => err ? res.status(500) && next(err) : res.status(200).send(comments));
})

// Get a comment by Comment
commentRouter.get('/:commentId', (req, res, next) => {
    Comment.findById(req.params.commentId, (err, comment) => err ? res.status(500) && next(err) : res.status(200).send(comment));
})

// Add New Comment
commentRouter.post('/', (req, res, next) => {
    const newComment= new Comment(req.body)
    newComment.save((err, savedComment) => err ? res.status(500) && next(err) : res.status(201).send(savedComment));
})

// Delete Comment
commentRouter.delete('/:commentId', (req, res, next) => {
    Comment.findOneAndDelete({_id: req.params.commentId}, (err, deletedComment) => err ? res.status(500) && next(err) : res.status(200).send(deletedComment));
})

// Update Comment
commentRouter.put('/:CommentId', (req, res, next) => {
    Comment.findOneAndUpdate(
        {_id: req.params.commentId},
        req.body, 
        {new: true},
        (err, updatedComment) => err ? res.status(500) && next(err) : res.status(201).send(updatedComment)
    )
})

module.exports = commentRouter;
