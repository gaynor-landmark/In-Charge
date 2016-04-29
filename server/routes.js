

module.exports = function routes(app){

  app.get('/', function(req, res){
    res.redirect('/index.html', { user: req.user });
  })

}


  //
  //
  // app.post('/challenges', function(req, res) {
  // var newId = uuid.v4()
  // console.log(user.id)
  // var userID = 0
  // if (passport.session.id){
  //   var userID = passport.session.id
  // }
  //
  //   knex('challenges').insert({
  //
  //
  //
  //       }).then(function(resp) {
  //         res.send('Saved')
  //       })
  // })
  //
  // app.get('/challenges', function(req, res) {
  //   console.log("in GET", passport.session.id)
  //   if (passport.session.id) {
  //     knex('challenges')
  //     .join('users', 'users.UserID', '=', 'palettes.UserID')
  //     .where('challenges.UserID', passport.session.id)
  //     .select('*')
  //     .then(function(resp) {
  //       console.log ("inget", resp)
  //         res.send(resp)
  //     })
  //   } else {
  //     res.send({})
  //   }
  //
  // })
  // app.get('/challenges/:UserID', function(req, res) {
  //   console.log("in GET for user", req.params.UserID)
  //
  //     knex('challenges')
  //
  //     .where('challenges.UserID', req.params.UserID)
  //     .then(function(resp) {
  //       console.log ("inget with userid", resp)
  //         res.send(resp[0])
  //     })
  //
  // })
  //
  //
  //
  //
  //  app.get('/user',
  //    function(req, res){
  //    res.send(passport.session.id);
  // })
  //
  // app.get('/auth/fitbit',
  //   passport.authenticate('fitbit'))
  //
  // app.get('/auth/fitbit/return',
  //   passport.authenticate('fitbit', { failureRedirect: '/login.html' }),
  //   function(req, res) {
  //     // set the session cookie with the details of the user who just logged in
  //     passport.session.id = req.user.id
  //     passport.session.displayName = req.user.displayName
  //     console.log(passport.session.id)
  //     // check if the user exists in the database
  //     knex('users').where('UserID', req.user.id).select('*')
  //     .then(function (resp1){
  //       if (!resp1[0]){
  //         // save the display name in the DisplayName field
  //         knex('users').insert({UserID: req.user.id, DisplayName:req.user.displayName})
  //         .then(function(resp2){
  //           res.redirect('/')
  //         })
  //       }
  //       res.redirect('/')
  //     })
  //   })
  //
  // app.get('/logout', function(req, res){
  //   passport.session.id = ""
  //   passport.session.displayName = ""
  //   req.logout()
  //   res.redirect('/')
  // })
  //
  //
  //
  //
  //
  // var urlencodedParser = bodyParser.urlencoded({ extended: false })
  //
  // app.use(bodyParser.json())
  //
  //
  //
  //
  // app.post('/sign-in', urlencodedParser, function(req, res){
  //   //find the user in the db (matching on their email) and pass their ID to the session object
  //   console.log('in get sign-in', req.body.email)
  //    knex('users').where(
  //     'Email', req.body.email)
  //     .select('Password_Hash', 'userID').then(function(resp) {
  //      // if the user's email is not found, redirect to the signup page
  //      if (resp.length <= 0) {
  //        console.log('not found')
  //        res.redirect('http://localhost:3000/signup.html')
  //      } else {
  //        console.log("found")
  //        if (req.body.password === resp[0].Password_Hash){
  //          req.session.userId = resp[0].id
  //          res.redirect('http://localhost:3000/index.html')
  //        } else {
  //          res.redirect('http://localhost:3000/signin.html')
  //        }
  //      }
  //    })
  //  })
  //
  //  app.post('/sign-up', function(req, res) {
  //    console.log('inget signup')
  //    console.log(req.body)
  //    console.log(req.body.email)
  //    console.log(req.body.password)
  //
  //   })
