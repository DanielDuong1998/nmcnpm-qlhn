const db = require('../utils/db');

module.exports = {
    conferences: (idVenue, time, sort) => {
        let sql = `select * from conference`;
        let flag1 = false;
        if (idVenue !== undefined && idVenue !== '') {
            sql = sql + ` where venue_id = '${idVenue}'`;
            flag1 = true;
        }

        if (time !== undefined && time !== '') {
            if (flag1) {
                sql = sql + ' and';
            }
            else sql = sql + ' where'
            sql = sql + ` time_start > '2021-01-20'`;
        }

        if (sort !== undefined && sort !== '') {
            sql = sql + ' order by name'
            if (sort == 1) {
                sql = sql + ' asc';
            }
            else {
                sql = sql + ' desc';
            }
        }

        console.log('sql: ' + sql);
        return db.load(sql);

    },
    getConferenceById: id => {
        let sql = `select * from conference where id = '${id}'`;
        return db.load(sql);

    }

}