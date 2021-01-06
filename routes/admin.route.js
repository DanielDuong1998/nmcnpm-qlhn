const express = require('express');
const bodyParser = require('body-parser');
const casual = require('casual');

const adminModel = require('../models/admin.model');

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

//tao tai khoan
router.post('/', urlencodedParser, async(req, res) => {
    const { body } = req;
    const entity = {...body };

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
    await adminModel.add(entity);

    res.send('completed');

});

const checkUsername = async username => {
    const id = await adminModel.getUsername(username);
    return id;
}

const checkEmail = async email => {
    const id = await adminModel.getEmail(email);
    return id;
}

module.exports = router;
//adddddd