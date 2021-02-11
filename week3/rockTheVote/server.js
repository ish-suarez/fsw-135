const express = require('express');
const app = express();
const morgan =  require('morgan');
const mongoose = require('mongoose');

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Mongoose DATA BASE
mongoose.connect(
    'mongodb://localhost:27017/rock_the_vote',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, 
    () => console.log('Connected to the DB')
)

// Routes
app.use('/auth', require('./routes/authRouter'));
app.use('', require('./routes/commentRouter'));
app.use('', require('./routes/issueRouter'));

// Error Handeling 
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message});
})

// Port
app.listen(9000, () => console.log('Listening on port 9000'));

