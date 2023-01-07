'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var express_1 = require('express');
var jsonwebtoken_1 = __importDefault(require('jsonwebtoken'));
var cookie_parser_1 = __importDefault(require('cookie-parser'));
var bcrypt_1 = __importDefault(require('bcrypt'));
var product_1 = require('./models/product');
var users_1 = require('./models/users');
var cookieJwtAuth_1 = require('./middleware/cookieJwtAuth');
var orders_1 = require('./models/orders');
// Creating new instances of classes
var router = (0, express_1.Router)();
var product = new product_1.Product();
var user = new users_1.Users();
var order = new orders_1.orders();
// salt rounds for hashing
var saltRounds = 10;
var SECRET = 'anana';
router.use((0, cookie_parser_1['default'])());
router.get('/', function (req, res) {
  res.send('Store route');
});
// product routes
// get all products
router.get('/product', function (req, res) {
  return __awaiter(void 0, void 0, void 0, function () {
    var result, err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2, , 3]);
          return [4 /*yield*/, product.index()];
        case 1:
          result = _a.sent();
          res.send(result);
          return [3 /*break*/, 3];
        case 2:
          err_1 = _a.sent();
          res.status(400);
          res.json(err_1);
          return [3 /*break*/, 3];
        case 3:
          return [2 /*return*/];
      }
    });
  });
});
//get a product
router.get('/product/:id', function (req, res) {
  return __awaiter(void 0, void 0, void 0, function () {
    var id, result, err_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2, , 3]);
          id = req.params.id;
          return [4 /*yield*/, product.show(id)];
        case 1:
          result = _a.sent();
          res.send(result[0]);
          return [3 /*break*/, 3];
        case 2:
          err_2 = _a.sent();
          res.status(400);
          res.json(err_2);
          return [3 /*break*/, 3];
        case 3:
          return [2 /*return*/];
      }
    });
  });
});
// create a new product
router.post('/product/add', cookieJwtAuth_1.authenticate, function (req, res) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, price, category, p, result, err_3;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 2, , 3]);
          (_a = req.body),
            (name_1 = _a.name),
            (price = _a.price),
            (category = _a.category);
          p = {
            name: name_1,
            price: parseInt(price),
            category: category,
          };
          return [4 /*yield*/, product.create(p)];
        case 1:
          result = _b.sent();
          res.send(result);
          return [3 /*break*/, 3];
        case 2:
          err_3 = _b.sent();
          res.status(400);
          res.json(err_3);
          return [3 /*break*/, 3];
        case 3:
          return [2 /*return*/];
      }
    });
  });
});
// user routes
// get all users
router.get(
  '/users',
  // authenticate,
  function (req, res) {
    return __awaiter(void 0, void 0, void 0, function () {
      var result, err_4;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, user.index()];
          case 1:
            result = _a.sent();
            res.send(result);
            return [3 /*break*/, 3];
          case 2:
            err_4 = _a.sent();
            res.status(400);
            res.json(err_4);
            return [3 /*break*/, 3];
          case 3:
            return [2 /*return*/];
        }
      });
    });
  }
);
//get a user
router.get('/users/:id', cookieJwtAuth_1.authenticate, function (req, res) {
  return __awaiter(void 0, void 0, void 0, function () {
    var token, id, result, err_5;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          token = req.cookies.token;
          try {
            jsonwebtoken_1['default'].verify(token, SECRET);
          } catch (err) {
            res.status(401);
            res.json(err);
            return [2 /*return*/];
          }
          _a.label = 1;
        case 1:
          _a.trys.push([1, 3, , 4]);
          id = req.params.id;
          return [4 /*yield*/, user.show(Number(id))];
        case 2:
          result = _a.sent();
          if (result.length === 0) {
            res.send('User does not exist');
          } else {
            res.send(result[0]);
          }
          return [3 /*break*/, 4];
        case 3:
          err_5 = _a.sent();
          res.status(400);
          res.json(err_5);
          return [3 /*break*/, 4];
        case 4:
          return [2 /*return*/];
      }
    });
  });
});
// creating new user
router.post('/users/add', function (req, res) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, password, salt, hash, u, tok, result, err_6;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          (_a = req.body),
            (firstName = _a.firstName),
            (lastName = _a.lastName),
            (password = _a.password);
          salt = bcrypt_1['default'].genSaltSync(saltRounds);
          hash = bcrypt_1['default'].hashSync(password, salt);
          u = {
            firstName: firstName,
            lastName: lastName,
            password: hash,
          };
          return [4 /*yield*/, (0, cookieJwtAuth_1.createCookieAuth)(req)];
        case 1:
          tok = _b.sent();
          res.cookie('token', tok, {
            httpOnly: true,
          });
          _b.label = 2;
        case 2:
          _b.trys.push([2, 4, , 5]);
          return [4 /*yield*/, user.create(u)];
        case 3:
          result = _b.sent();
          res.status(200).json(result);
          return [3 /*break*/, 5];
        case 4:
          err_6 = _b.sent();
          res.status(400).json('Invalid details provided');
          return [3 /*break*/, 5];
        case 5:
          return [2 /*return*/];
      }
    });
  });
});
// get all orders
router.get('/orders', cookieJwtAuth_1.authenticate, function (req, res) {
  return __awaiter(void 0, void 0, void 0, function () {
    var result, err_7;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2, , 3]);
          return [4 /*yield*/, order.index()];
        case 1:
          result = _a.sent();
          res.status(200).json(result);
          return [3 /*break*/, 3];
        case 2:
          err_7 = _a.sent();
          res.status(400).json('Invalid details provided');
          return [3 /*break*/, 3];
        case 3:
          return [2 /*return*/];
      }
    });
  });
});
// get order with specific status
router.get('/orders/:state', cookieJwtAuth_1.authenticate, function (req, res) {
  return __awaiter(void 0, void 0, void 0, function () {
    var state, result, err_8;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          state = req.params.state;
          _a.label = 1;
        case 1:
          _a.trys.push([1, 3, , 4]);
          return [4 /*yield*/, order.showCompleted(state)];
        case 2:
          result = _a.sent();
          if (result.length === 0 || result === null) {
            res.status(200).json('Nothing to show Here');
          } else {
            res.status(200).json(result);
          }
          return [3 /*break*/, 4];
        case 3:
          err_8 = _a.sent();
          res.status(400).json('Invalid details provided');
          return [3 /*break*/, 4];
        case 4:
          return [2 /*return*/];
      }
    });
  });
});
exports['default'] = router;
