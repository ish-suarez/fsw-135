const express = require('express');
const authRouter = express.Router();
const User = require('../models/user');

    // Get All Users    
    authRouter.get('/', (req, res, next) => {
        User.find((err, users) => err ? res.status(500) && next(err) : res.status(200).send(users));
    })

    // Get Username
    authRouter.get('/search', (req, res, next) => {
        const {username} = req.query;
        const pattern = new RegExp(username);
        User.find({username: {$regex: pattern, $options: 'i'}}, (err, user) => err ? res.status(500) && next(err) : res.status(200).send(user));
    })

    // Add New User
    authRouter.post('/', (req, res, next) => {
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => err ? res.status(500) && next(err) : res.status(201).send(savedUser));
    })

    // Delete User
    authRouter.delete('/:userId', (req, res, next) => {
        User.findOneAndDelete({_id: req.params.userId}, (err, deletedUser) => err ? res.status(500) && next(err) : res.status(200).send(deletedUser));
    })

    // Update User
    authRouter.put('/:userId', (req, res, next) => {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            req.body, 
            {new: true},
            (err, updatedUser) => err ? res.status(500) && next(err) : res.status(201).send(updatedUser)
        )
    })


module.exports = authRouter;
