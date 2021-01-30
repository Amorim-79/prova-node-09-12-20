"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const celebrate_1 = require("celebrate");
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
// Errors do Celebrate
app.use(celebrate_1.errors());
app.use('*', (req, res) => res.status(404).json({ error: 'Not Found' }));
app.use((error, req, res, next) => {
    return res.status(500).json({ error: error.message });
});
exports.default = app;
