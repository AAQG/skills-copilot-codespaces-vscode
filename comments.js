// Create web server
// Load the express module
var express = require('express');
// Invoke var express and store the resulting application in var app
var app = express();
// Load the path module
var path = require('path');
// Load the body-parser
var bodyParser = require('body-parser');
// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));
// Set up static folder directory to be /static
app.use(express.static(path.join(__dirname, './static')));
// Set the location where express will look for the ejs views
app.set('views', path.join(__dirname, './views'));
// Set the view engine so express knows we are using ejs as templating engine
app.set('view engine', 'ejs');
// Require the mongoose config file which does the rest for us
require('./server/config/mongoose.js');
// Require routes.js file and pass it the express app
var routeSetter = require('./server/config/routes.js');
routeSetter(app);
// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log('Listening on port 8000');
});
