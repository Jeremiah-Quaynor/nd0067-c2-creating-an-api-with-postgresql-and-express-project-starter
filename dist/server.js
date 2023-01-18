"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = __importDefault(require("./routes"));
exports.app = (0, express_1["default"])();
var port = 3000;
exports.app.use(body_parser_1["default"].json());
exports.app.get('/', function (req, res) {
    res.send('Home route');
});
exports.app.use('/store', routes_1["default"]);
exports.app.listen(port, function () {
    console.log("starting app on http://localhost:".concat(port));
});