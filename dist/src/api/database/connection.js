"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const path_1 = __importDefault(require("path"));
const knex_paginate_1 = require("knex-paginate");
knex_paginate_1.attachPaginate();
// Define a conexão do banco de dados
const database = knex_1.default({
    client: 'sqlite3',
    connection: {
        filename: path_1.default.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});
exports.default = database;
