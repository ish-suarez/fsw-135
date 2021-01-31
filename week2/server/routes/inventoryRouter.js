// Inventory Route
const express = require('express');
const inventoryRouter = express.Router();
const Inventory = require('../models/inventory');


// Get Requests 
inventoryRouter.get('/', (req, res, next) => {
    Inventory.find((err, items) => {
        if(err) {
            res.status(500);
            return next(err);
        }
        res.status(200).send(items);
    });
});

// Get One By _id
inventoryRouter.get('/:itemId', (req, res, next) => {
    Inventory.findById({_id: req.params.itemId}, (err, item) => {
        if(err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(item);
    })
})

// Post Request
inventoryRouter.post('/', (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

// Delete Request
inventoryRouter.delete('/:itemId', (req, res, next) => {
    Inventory.findOneAndDelete({_id: req.params.itemId}, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.itemName} from the database`)
    })
})

// Put Request
inventoryRouter.put('/:itemId', (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.itemId},
        req.body,
        {new: true},
        (err, updatedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

// Get By Items Type
inventoryRouter.get('/search/itemType', (req, res, next) => {
    Inventory.find({itemType: req.query.itemType}, (err, items) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

// Module Exports
module.exports = inventoryRouter;
