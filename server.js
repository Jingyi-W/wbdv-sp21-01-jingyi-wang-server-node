const express = require('express')
const app = express()

//connect to mondodb
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI
mongoose.connect(`mongodb://${mongoURI}/whiteboard`, {useNewUrlParser: true, useUnifiedTopology: true});

//configure CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

require('./controllers/quizzes-controller')(app)
require('./controllers/question-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 3000)