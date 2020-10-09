const mysql = require('mysql2');
const config = require('./config.json')

// create the connection to database
const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    timezone:"UTC+9",
    multipleStatements:true,
});

promisePool = pool.promise()

module.exports = {
    promisePool,

}
