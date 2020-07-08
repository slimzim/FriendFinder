// DEPENDENCIES ================================================
var express = require("express")
var app = express();
var PORT = process.env.PORT || 3030;
var html = require('./routing/htmlRoutes.js')
var api = require('./routing/apiRoutes.js')

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing information pulled from external js files ===========
app.get('/', html.home)
app.get('/survey', html.survey)
app.get('/api/friends', api.showFriends)
app.post('/api/friends', api.newFriend)
    
// Starts the server to begin listening   ======================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });