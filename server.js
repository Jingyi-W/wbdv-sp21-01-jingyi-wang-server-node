const express = require('express')
const app = express()

//connect to mondodb
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI
mongoose.connect(`${mongoURI}/whiteboard`, {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect("mongodb+srv://Wbdv21Spring:bTLzEQRnaZR3sDRt@cluster0.ojpde.mongodb.net/whiteboard?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect("mongodb://localhost:27017/whiteboard", {useNewUrlParser: true, useUnifiedTopology: true});

//configure CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./controllers/quizzes-controller')(app)
require('./controllers/question-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 3001)
// app.listen(3000)