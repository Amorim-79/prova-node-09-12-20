"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var app_1 = __importDefault(require("./app"));
// Cria o server na porta 3000
http_1.default.createServer(app_1.default).listen(3000, function () { return console.log("server start at port 3000"); });
