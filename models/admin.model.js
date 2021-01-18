const bcrypt = require('bcryptjs');
const momentTz = require('moment-timezone');

const db = require('../utils/db');

module.exports = {
    all: db.load('SELECT * FROM admin'),

    add: entity => {
        const hash = bcrypt.hashSync(entity.password, 8);
        entity.password = hash;
        return db.add(entity, 'admin');
    },

    updateRefreshToken: (id, refresh_token) => {
        const sql = `update admin set refresh_token = '${refresh_token}' where id = '${id}'`;
        return db.load(sql);
    },

    getUsername: async user_name => {
        const sql = `select id from admin where '${user_name}' = user_name`;
        const row = await db.load(sql);
        return row[0];
    },

    getEmail: async email => {
        const sql = `select id from admin where '${email}' = email`;
        const row = await db.load(sql);
        return row[0];
    },

    singleRow: async user_name => {
        const sql = `select * from admin where '${user_name}' = user_name`;
        const row = await db.load(sql);
        return row;
    },

    getRefreshTokenById: async id => {
        const sql = `select refresh_token from  admin where '${id}' = id`;
        const row = await db.load(sql);
        return row[0];
    },
}