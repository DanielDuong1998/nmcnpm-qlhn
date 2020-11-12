const db = require('../utils/db');

module.exports = {
    all: db.load('SELECT * FROM user')
}