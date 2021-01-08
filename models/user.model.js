const bcrypt = require('bcryptjs');
const momentTz = require('moment-timezone');

const db = require('../utils/db');

module.exports = {
    all: _ => db.load('SELECT * FROM user'),

    add: entity => {
        const hash = bcrypt.hashSync(entity.password, 8);
        entity.password = hash;
        return db.add(entity, 'user');
    },

    updateRefreshToken: (id, refresh_token) => {
        const sql = `update user set refresh_token = '${refresh_token}' where id = '${id}'`;
        return db.load(sql);
    },

    changePassword: entity => {
        const passwordHash = bcrypt.hashSync(entity.new_password, 8);
        const sql = `update user set password = '${passwordHash}' where id = '${entity.id}'`;
        return db.load(sql);
    },

    getUsername: async user_name => {
        const sql = `select id from user where  user_name = '${user_name}'`;
        const row = await db.load(sql);
        return row[0];
    },

    getEmail: async email => {
        const sql = `select id from user where email = '${email}'`;
        const row = await db.load(sql);
        return row[0];
    },

    singleRow: async user_name => {
        const sql = `select * from user where user_name = '${user_name}'`;
        const row = await db.load(sql);
        return row;
    },

    getRefreshTokenById: async id => {
        const sql = `select refresh_token from  user where id= '${id}'`;
        const row = await db.load(sql);
        return row[0];
    },

    getPasswordById: async id => {
        const sql = `select password from user where id = '${id}'`;
        const row = await db.load(sql);
        return row[0];
    }


}