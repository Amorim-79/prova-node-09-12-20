"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path_1.default.resolve(__dirname, 'src', 'api', 'database', 'database.sqlite'),
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, 'src', 'api', 'database', 'migrations'),
    },
    useNullAsDefault: true,
};
