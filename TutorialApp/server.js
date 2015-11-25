var express = require("express");
var app = express();

// sets port 8080 to default or unless otherwise specified in the environment
app.set('port', process.env.PORT || 8082);
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1841');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ name: 'shiwang', proj:'sencha' }, null, 3));
});

app.listen(app.get('port'));
