
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const randToken = require('rand-token');

const userModel = require('../models/user.model');
const adminModel = require('../models/admin.model');
const authModel = require('../models/auth.model');

const config = require('../configs/default.json');


const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/', (req, res) => {
    res.render('login', { title: 'Express' });
})

router.post('/', urlencodedParser, async (req, res) => {
    // let body = {
    //     user_name: 'dvkhangnt',
    //     password: '123456',
    //     mode: '1' // 1 = > user, 0 => admin
    // }


    const { body } = req;
    const entity = {
        user_name: body.user_name,
        password: body.password
    }

    console.log('body: ', body);


    let ret = await login(entity, body);
    
    res.json(ret);


})

const generateAcessToken = (id, mode, secret) => {
    const payload = { id, mode };
    const accessToken = jwt.sign(payload, secret, {
        expiresIn: config.auth.expiresIn
    });
    return accessToken;
}

const generateRefreshToken = _ => {
    return randToken.generate(config.auth.sizeRefreshToken);
}

const login = async (entity, body) => {
    let ret = '';
    const row = body.mode == 1 ? await authModel.loginUser(entity) : await authModel.loginAdmin(entity);
    if (row === null) {
        ret = { status: 0, msg: 'authenticatied false' };
    }
    else if (body.mode == 1 && row.is_active === 0) {
        ret = { status: -1, msg: 'your account is blocked' }
    }
    else {
        const access_token = generateAcessToken(row.id, body.mode, config.auth.secretPassword);

        let refresh_token = '';
        const refreshTokeInDb = body.mode == 1 ? await userModel.getRefreshTokenById(row.id) : await adminModel.getRefreshTokenById(row.id);
        if (refreshTokeInDb.refresh_token === null || refreshTokeInDb.refresh_token === '') {
            refresh_token = generateRefreshToken();
        }
        else refresh_token = refreshTokeInDb.refresh_token;

        if (body.mode == 1)
            userModel.updateRefreshToken(row.id, refresh_token);
        else
            adminModel.updateRefreshToken(row.id, refresh_token);

        ret = {
            status: 1,
            ...row,
            access_token,
            refresh_token
        }
        delete ret.password;
    }
    return ret;
}

module.exports = router;

