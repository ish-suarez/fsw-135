const express = require('express');
const app = express();
require('dotenv').config();
const morgan =  require('morgan');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');

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
app.use('/api', expressJwt({secret: process.env.SECRET, algorithms: ['HS256']}));
app.use('/api/user', require('./routes/userRouter'));
app.use('/api/issue', require('./routes/issueRouter'));
app.use('/api/comment', require('./routes/commentRouter'));

// Error Handeling 
app.use((err, req, res, next) => {
    console.log(err)
        if(err.name === 'Unauthorized Error'){
            res.status(err.status)
        }
    return res.send({errMsg: err.message});
})

// Port
app.listen(9000, () => console.log('Listening on port 9000'));

