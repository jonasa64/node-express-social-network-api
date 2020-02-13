const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');


const app = express();

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`server is start on port ${port}`)
})

try {
     mongoose.connect('',({ useNewUrlParser: true}));
     console.log("connected to database")
}catch (error) {
    console.log(error);
   console.log("failed to connect to database")
}


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


