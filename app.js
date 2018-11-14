var subdomain = require('express-subdomain');
var express = require('express');
var apiRoutes = require('./routes/subdomains');
var app = express();
 
// *** Code examples below go here! ***
 
// example.com
app.get('/', function(req, res) {
    res.send('Homepage');
});
// *** subdomain routes
app.use(subdomain('api', apiRoutes));

app.listen(3000);
