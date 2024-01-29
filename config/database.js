const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users',
});

// Now you can use 'pool' to query the database

module.exports = pool;
