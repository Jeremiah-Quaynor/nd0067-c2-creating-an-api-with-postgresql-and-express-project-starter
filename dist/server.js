var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
var address = "0.0.0.3000";
app.get('/', function (req, res) {
    res.send('Home route');
});
app.listen(3000, function () {
    console.log("starting app on ".concat(address));
});
