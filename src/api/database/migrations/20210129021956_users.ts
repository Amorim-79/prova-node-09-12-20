import * as Knex from "knex";

// Cria a tabela users
export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('username').unique().notNullable();
        table.string('email').unique().notNullable();
    })
}
// Apaga a tabela users
export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}