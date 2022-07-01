const path = require('path');

const DB_NAME =  'milonga_db';
// set as variable for future test-based dev

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PSQL_HOST', '127.0.0.1'),
      port: env.int('PSQL_PORT', '5432'),
      database: DB_NAME,
      user: env('PSQL_USER', 'kingtor'),
      password: env('PSQL_PW', 'badpassword'),
      // filename: path.join(__dirname, '..', env('MILONGA_DB_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
