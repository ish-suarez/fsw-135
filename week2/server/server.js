// Express Server
const express = require('express');
const app = express();
const morgan = require('morgan');
const booleanParser = require('express-query-boolean');

// Server Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(booleanParser());

// Mongoose Middleware
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/inventorydb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
);

// Inventory Route
app.use('/inventory', require('./routes/inventoryRouter'));

// App Set To Listen
app.listen(9000, () => console.log('Server Is Listening On Port 9000'));