const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '314159',
    database: 'peopledb'
});

module.exports = connection;