"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1.default.config();
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, POSTGRES_TEST_DB = _a.POSTGRES_TEST_DB, RDS_HOSTNAME = _a.RDS_HOSTNAME, RDS_DB_NAME = _a.RDS_DB_NAME, RDS_USERNAME = _a.RDS_USERNAME, RDS_PASSWORD = _a.RDS_PASSWORD, ENV = _a.ENV;
// Documentation: https://node-postgres.com/api/pool
// Connecting to the database in case of Development
var poolDev = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    max: 20,
    idleTimeoutMillis: 30000,
});
// Connecting to the database in case of test
var poolTest = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    max: 20,
    idleTimeoutMillis: 30000,
});
// Connecting to the database in case of Production (RDS)
var poolProd = new pg_1.Pool({
    host: RDS_HOSTNAME,
    database: RDS_DB_NAME,
    user: RDS_USERNAME,
    password: RDS_PASSWORD,
    max: 20,
    idleTimeoutMillis: 30000,
});
// Export the connection pool
var Client = ENV === 'dev' ? poolDev : ENV === 'test' ? poolTest : poolProd;
console.log("Connected to ".concat(ENV, " database"));
exports.default = Client;
