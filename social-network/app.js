const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const logger = require('morgan');
const mongoose = require('mongoose');


const app = express();

const port = process.env.PORT || 3000;

const dbURL = process.env.DBURL || ''

app.listen(port,() => {
    console.log(`server is start on port ${port}`)
})

try {
     mongoose.connect(dbURL,({ useNewUrlParser: true}));
     console.log("connected to database")
}catch (error) {
    console.log(error);
   console.log("failed to connect to database")
}


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const friendsRoutes = require('./routes/friends');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/friends', friendsRoutes);

