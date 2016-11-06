var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var massive = require('massive');
// var FacebookStrategy = require('passport-facebook').Strategy;
// var config = require('./config.js');
// var connectionString = "postgres://postgres:serverpw@localhost/Woodshop";

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

// var massiveInstance = massive.connectSync({connectionString : connectionString})
// app.set('db', massiveInstance);

var controller = require('./controller'); //have to call after our export

app.use(express.static(__dirname));
// app.use(session({
//   secret: 'supersecret',
//   resave: true,
//   saveUninitialized: true
// }));

// app.use(passport.initialize());
// app.use(passport.session());
app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
});

app.get('/getall', controller.GetAll);
controller.GetOne();
controller.Create();
app.post('/update', controller.Update);
