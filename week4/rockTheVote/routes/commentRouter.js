const express = require('express');
const commentRouter = express.Router();
const Comment = require('../models/comment');


// Get All Comments 
commentRouter.get('/', (req, res, next) => {
    Comment.find((err, comments) => err ? res.status(500) && next(err) : res.status(200).send(comments));
})

// Get a comments by user _id
commentRouter.get('/user', (req, res, next) => {
    Comment.find({user: req.user._id}, (err, comments) => err ? res.status(500) && next(err) : res.status(200).send(comments));
})

// Add New Comment
commentRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
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
