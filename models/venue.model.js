const db = require('../utils/db');

module.exports = {
    venues: _ => {
        let sql = `select * from venue order by name, capacity asc`;
        return db.load(sql);
    }
}