const express = require('express');
const unprotectedIssue = express.Router();
const Issue = require('../models/issue');

unprotectedIssue.get('/', (req, res, next) => {
    Issue.find((err, issue) => err ? res.status(500) && next(err) : res.status(200).send(issue));
}) 

module.exports = unprotectedIssue;