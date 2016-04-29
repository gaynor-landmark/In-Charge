'use strict'
var express = require('express')
var cors = require('cors')
var path = require('path')
var passport = require('passport')
var $ = require('jquery')
var bodyParser = require('body-parser')
var dotenv = require('dotenv')
var Strategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy
var session = require('express-session')

var routes = require('./routes')

dotenv.load()
var app = express() // create the express application
var server = require('http').createServer(app) // create the server

app.use(express.static(path.join(__dirname, '../public')))

app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))

//app.use(session({ secret: 'keyboard cat' }));

app.use(passport.initialize());
app.use(passport.session({
  resave: false,
  saveUninitialized: true
}))

console.log("env:", process.env.FITBIT_CLIENT_ID,process.env.FITBIT_CLIENT_SECRET)
passport.use(new Strategy({
      clientID: process.env.FITBIT_CLIENT_ID,
      clientSecret: process.env.FITBIT_CLIENT_SECRET,
      scope: ['activity','heartrate','location','profile'],
      callbackURL: 'http://localhost:3000/auth/fitbit/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ fitbitId: profile.id }, function (err, user) {
        return done(err, user)
      })
    }
  )
)
//
// var fitbitStrategy = new FitbitStrategy({
//   clientID: CLIENT_ID,
//   clientSecret: CLIENT_SECRET,
//
//   callbackURL: "http://localhost:3000/auth/fitbit/callback"
// }, function(accessToken, refreshToken, profile, done) {
//   // TODO: save accessToken here for later use
//
//   done(null, {
//     accessToken: accessToken,
//     refreshToken: refreshToken,
//     profile: profile
//   });
//
// });
//


passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(obj, done) {
  done(null, obj)
})




routes(app)

if (require.main === module) {
  var port = process.env.PORT || 3000
  server.listen(port, function () {
    console.log('Server is running on port 3000!')
  })
}

var fitbitAuthenticate = passport.authenticate('fitbit', {
  successRedirect: '/auth/fitbit/success',
  failureRedirect: '/auth/fitbit/failure'
});

app.get('/auth/fitbit', fitbitAuthenticate);
app.get('/auth/fitbit/callback', fitbitAuthenticate);

app.get('/auth/fitbit/success', function(req, res, next) {
  res.send(req.user);
});
