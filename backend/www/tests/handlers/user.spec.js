"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var server_1 = __importDefault(require("../../server"));
var database_1 = __importDefault(require("../../database"));
var user_1 = require("../../models/user");
var generateToken_1 = require("../../utils/generateToken");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var request = (0, supertest_1.default)(server_1.default);
var user_store = new user_1.UserStore();
describe('The Orders End-Points', function () {
    // First: check if the endpoints is defined
    it('should have an create method', function () {
        expect(user_store.create).toBeDefined();
    });
    it('should have an index method', function () {
        expect(user_store.index).toBeDefined();
    });
    it('should have an show method', function () {
        expect(user_store.show).toBeDefined();
    });
    var token;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, createUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = {
                        username: 'ahmed',
                        first_name: 'ahmed',
                        last_name: 'el-sayed',
                        password: '123',
                    };
                    return [4 /*yield*/, user_store.create(user)
                        // Create a token before starting the tests to use it in the backend
                    ];
                case 1:
                    createUser = _a.sent();
                    return [4 /*yield*/, (0, generateToken_1.generateToken)(createUser)];
                case 2:
                    // Create a token before starting the tests to use it in the backend
                    token = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // Second: check if the endpoints works
    it('should create a user', function () { return __awaiter(void 0, void 0, void 0, function () {
        var endpoint_user, response, decode, eval_user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint_user = {
                        username: 'ali',
                        first_name: 'ali',
                        last_name: 'samir',
                        password: '123',
                    };
                    return [4 /*yield*/, request
                            .post('/users')
                            .set('Authorization', "Bearer ".concat(token))
                            .send(endpoint_user)
                            .expect(200)
                        // note that the response is a token, so we need to decode it to get the created user
                    ];
                case 1:
                    response = _a.sent();
                    decode = jsonwebtoken_1.default.verify(response.body, process.env.TOKEN_SECRET || 'secret');
                    eval_user = eval(decode);
                    expect(eval_user.user.username).toBe(endpoint_user.username);
                    expect(eval_user.user.first_name).toBe(endpoint_user.first_name);
                    expect(eval_user.user.last_name).toBe(endpoint_user.last_name);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should get all users', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .get('/users')
                        .set('Authorization', "Bearer ".concat(token))
                        .expect(200)];
                case 1:
                    response = _a.sent();
                    expect(response.body.length).toBe(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should get a user', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .get('/users/2')
                        .set('Authorization', "Bearer ".concat(token))
                        .expect(200)];
                case 1:
                    response = _a.sent();
                    expect(response.body.username).toBe('ali');
                    return [2 /*return*/];
            }
        });
    }); });
    // clear a table in PostgreSQL
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var connection_pool;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.default.connect()];
                case 1:
                    connection_pool = _a.sent();
                    return [4 /*yield*/, connection_pool.query('ALTER SEQUENCE users_id_seq RESTART WITH 1')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, connection_pool.query('TRUNCATE TABLE users CASCADE')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, connection_pool.release()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
