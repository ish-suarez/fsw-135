const express = require('express');
const unprotectedIssue = express.Router();
const Issue = require('../models/issue');

unprotectedIssue.get('/', (req, res, next) => {
    Issue.find((err, issue) => err ? res.status(500) && next(err) : res.status(200).send(issue));
}) 

unprotectedIssue.put('/like/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId},
        { $inc: { upVotes: 1  } },
        {new: true},
        (err, updateIssue) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updateIssue)
        }
    )
})

unprotectedIssue.put('/dislike/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId},
        { $inc: { downVotes: 1  } },
        {new: true},
        (err, updateIssue) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updateIssue)
        }
    )
})

module.exports = unprotectedIssue;