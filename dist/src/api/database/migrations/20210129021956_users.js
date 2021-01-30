"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
// Cria a tabela users
async function up(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('username').unique().notNullable();
        table.string('email').unique().notNullable();
    });
}
exports.up = up;
// Apaga a tabela users
async function down(knex) {
    return knex.schema.dropTable('users');
}
exports.down = down;
