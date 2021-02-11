const express = require('express');
const issueRouter = express.Router();
const Issue = require('../models/issue');

// Get All Issue    
issueRouter.get('/', (req, res, next) => {
    Issue.find((err, issue) => err ? res.status(500) && next(err) : res.status(200).send(issue));
})

// Get Issue by Id
issueRouter.get('/:issueId', (req, res, next) => {
    Issue.findById(req.params.issueId, (err, issue) => err ? res.status(500) && next(err) : res.status(200).send(issue));
})

// Add New Issue
issueRouter.post('/', (req, res, next) => {
    const newIssue = new Issue(req.body);
    newIssue.save((err, savedIssue) => err ? res.status(500) && next(err) : res.status(201).send(savedIssue));
})

// Delete Issue
issueRouter.delete('/:issueId', (req, res, next) => {
    Issue.findOneAndDelete({_id: req.params.issueId}, (err, deletedIssue) => err ? res.status(500) && next(err) : res.status(200).send(deletedIssue));
})

// Update Issue
issueRouter.put('/:userId', (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.userId},
        req.body, 
        {new: true},
        (err, updatedIssue) => err ? res.status(500) && next(err) : res.status(201).send(updatedIssue)
    )
})

module.exports = issueRouter;
