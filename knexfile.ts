import path from 'path';

export = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'api', 'database', 'database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'api', 'database', 'migrations'),
    },
    useNullAsDefault: true,
}