const mysql = require('mysql');
const { promisify } = require('util');
const config = require('../configs/default.json');

const pool = mysql.createPool(config.mysql);

const pool_query = promisify(pool.query).bind(pool);

pool.getConnection(function (err, connection) {
    if (err) {
        console.log('failure connect database!');
        throw err;
    } // not connected!
    else console.log('connected database!');
})

module.exports = {
    load: sql => pool_query(sql),
    add: (entity, tableName) => pool_query(`insert into ${tableName} set ? `, entity)
}