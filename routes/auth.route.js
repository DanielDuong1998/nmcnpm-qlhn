const express = require('express');
const bcrypt = require('bcryptjs');
const config = require('../configs/default.json');


const auth = require('../middlewares/auth.mdw');
const authModel = require('../models/auth.model');
const router = express.Router();



/* GET users listing. */
router.get('/login', async function(req, res) {
    res.render('vwAuth/login', {
        layout: false
    });
})


router.post('/login', async function(req, res) {
    const user = await authModel.singleByUserName(req.body.user_name);
    if (user === null) {
        return res.render('vwAuth/login', {
            layout: false,
            err_message: 'Invalid username or password.'
        });
    }
    const ret = bcrypt.compareSync(req.body.password, user.password);
    if (ret === false) {
        return res.render('vwAuth/login', {
            layout: false,
            err_message: 'Invalid username or password.'
        });
    }

    req.session.isAuth = true;
    req.session.authUser = user;

    let url = req.session.retUrl || '/';
    res.redirect(url);
})


router.post('/logout', async function(req, res) {
    req.session.isAuth = false;
    req.session.authUser = null;
    res.redirect(req.headers.referer);
})




router.get('/signup', async function(req, res) {
    res.render('vwAuth/signup',{
        layout: false
    });
})

router.post('/signup', async function(req, res) {
    const hash = bcrypt.hashSync(req.body.password, 10);
    // const dob = moment(req.body.f_DOB, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const user = {
        user_name: req.body.user_name,
        password: hash,
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        is_active:0
    }

    await authModel.add(user);
    res.render('vwAuth/signup');
})


router.get('/is-available', async function(req, res) {
    const user_name = req.query.user;
    const user = await authModel.singleByUserName(user_name);
    if (user === null) {
        return res.json(true);
    }
    res.json(false);
})


router.get('/info', auth, async function(req, res) {
    res.render('vwAuth/login');
})



module.exports = router;