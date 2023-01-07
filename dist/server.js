'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var express_1 = __importDefault(require('express'));
var body_parser_1 = __importDefault(require('body-parser'));
var routes_1 = __importDefault(require('./routes'));
var app = (0, express_1['default'])();
var port = 3000;
app.use(body_parser_1['default'].json());
app.get('/', function (req, res) {
  res.send('Home route');
});
app.use('/store', routes_1['default']);
app.listen(port, function () {
  console.log('starting app on http://localhost:'.concat(port));
});
