"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var user_1 = __importDefault(require("./handlers/user"));
var product_1 = __importDefault(require("./handlers/product"));
var order_1 = __importDefault(require("./handlers/order"));
var homePage_1 = __importDefault(require("./handlers/homePage"));
var morgan_1 = __importDefault(require("morgan"));
var aws_sdk_1 = __importDefault(require("aws-sdk"));
// import { Sequelize, Model, DataTypes } from 'sequelize'
//
// const sequelize = new Sequelize(
//   'postgres://postgres:postgres@postgres.ckry9talr84o.us-east-1.rds.amazonaws.com:5432/postgres'
// )
// https://sequelize.org/docs/v6/getting-started/
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
// Testing the connection
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }
var app = (0, express_1.default)();
var address = '0.0.0.0:3000';
var corsOptions = {
    origin: 'http://127.0.0.1:8080',
    optionsSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)('dev'));
// use aws-sdk in express app
aws_sdk_1.default.config.update({
    region: 'us-east-1',
    accessKeyId: 'AKIAXALHREMKAARJ6HWT',
    secretAccessKey: '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',
});
app.get('/', function (req, res) {
    res.send('Hello World!');
});
(0, order_1.default)(app);
(0, product_1.default)(app);
(0, user_1.default)(app);
(0, homePage_1.default)(app);
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
exports.default = app;
