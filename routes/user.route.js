const express = require('express');
const bodyParser = require('body-parser');
const casual = require('casual');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const userModel = require('../models/user.model');
const middleware = require('../middlewares/middleware');

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
router.get('/', async (req, res) => {
    const ret = await userModel.all();
    res.json({
        data: ret
    })
    //res.render('login', { title: 'Login' });
});

//tao tai khoan
router.post('/', urlencodedParser, async (req, res) => {
    const { body } = req;
    const entity = { ...body };

    //checkUsername
    const id1 = await checkUsername(entity.user_name);
    if (id1) {
        res.json({ msg: 'username is exist' });
        return;
    }

    //checkEmail
    const id2 = await checkEmail(entity.email);
    if (id2) {
        res.json({ msg: 'email is exist' });
        return;
    }

    //create id by casual and 
    const id = casual.uuid;
    entity.id = id;
    entity.is_active = 1;
    await userModel.add(entity);

    res.json({
        status: 1,
        msg: 'completed create account'
    });

});

router.get('/password', urlencodedParser, async (req, res) => {
    console.log('get here');
    res.render('forgetPassword', { title: 'Quên Mật Khẩu' });
});

router.put('/password', async (req, res) => {
    console.log("vao đay nè: ", req.body)
    const { body } = req;

    if (body.role === 0) return res.json({ status: -1 });

    let verifyPw = await verifyPassword(body.id, body.old_password);
    if (!verifyPw) return res.json({ status: -1 });

    const entity = {
        id: body.id,
        old_password: body.old_password,
        new_password: body.new_password
    };

    await userModel.changePassword(entity);

    res.json({
        status: 1
    })
});

router.post('/update-name', async (req, res) => {
    let { id, name } = req.body;

    console.log('data: ne ahihihi')

    if (name === undefined || name === '') return res.json({ status: -1, msg: 'failed to save name' })
    await userModel.updateName(id, name);

    res.json({
        status: 1,
        msg: 'update name completed'
    })
})

router.post('/update-email', async (req, res) => {
    let { id, email } = req.body;

    if (email === undefined || email === '') return res.json({ status: -1, msg: 'failed to save email' })
    await userModel.updateEmail(id, email);

    res.json({
        status: 1,
        msg: 'update email completed'
    })
})

router.post('/update-phone', async (req, res) => {
    let { id, phone } = req.body;

    if (phone === undefined || phone === '') return res.json({ status: -1, msg: 'failed to save phone' })
    await userModel.updatePhone(id, phone);

    res.json({
        status: 1,
        msg: 'update phone completed'
    })
})

const checkUsername = async username => {
    const id = await userModel.getUsername(username);
    return id;
}

const checkEmail = async email => {
    const id = await userModel.getEmail(email);
    return id;
}

const verifyPassword = async (id, password) => {
    let passwordHash = await userModel.getPasswordById(id);
    return bcrypt.compareSync(password, passwordHash.password);
}

router.get('/info', function (req, res) {
    res.render('vwUser/info');
})

router.get('/registeredconference', function (req, res) {
    res.render('vwUser/registeredconference');
})

router.get('/index', function (req, res) {
    res.render('vwUser/index');
})

module.exports = router;