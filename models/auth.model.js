// // const bcrypt = require('bcryptjs');

// const db = require('../utils/db');
// // const userModel = require('../models/user.model');
// // const adminModel = require('../models/admin.model');



// const TBL_USERS = 'user';

// module.exports = {
//     all() {
//         return db.load(`select * from ${TBL_USERS}`);
//     },


//     async single(id) {
//         const rows = await db.load(`select * from ${TBL_USERS} where id = ${id}`);
//         if (rows.length === 0)
//             return null;
//         return rows[0];
//     },


//     async singleByUserName(user_name) {
//         const rows = await db.load(`select * from ${TBL_USERS} where user_name = '${user_name}'`);
//         if (rows.length === 0)
//             return null;
//         return rows[0];
//     },


//     add(entity) {
//         return db.add(entity, TBL_USERS);
//     },


// };









const bcrypt = require('bcryptjs');

const db = require('../utils/db');
const userModel = require('../models/user.model');
const adminModel = require('../models/admin.model');

module.exports = {
    loginUser: async entity => {
        // entity = {
        //     user_name: 'dvkhangnt',
        //     password: '123456'
        // }
        const row = await userModel.singleRow(entity.user_name);
        if (row.length === 0) {
            return null;
        }

        const passwordHash = row[0].password;
        if (bcrypt.compareSync(entity.password, passwordHash)) {
            return row[0];
        }

        return null;
    },

    loginAdmin: async entity => {
        // entity = {
        //     user_name: 'dvkhangnt',
        //     password: '123456'
        // }

        const row = await adminModel.singleRow(entity.user_name);
        if (row.length === 0) {
            return null;
        }

        console.log('entity: ', entity);
        console.log('row: ', row[0]);

        const passwordHash = row[0].password;
        if (bcrypt.compareSync(entity.password, passwordHash)) {
            return row[0];
        }

        return null;
    }
}

