// const express = require('express');
// const bcrypt = require('bcryptjs');
// const config = require('../configs/default.json');


// const auth = require('../middlewares/auth.mdw');
// const authModel = require('../models/auth.model');
// const router = express.Router();



// /* GET users listing. */
// router.get('/login', async function(req, res) {
//     res.render('vwAuth/login', {
//         layout: false
//     });
// })


// router.post('/login', async function(req, res) {
//     const user = await authModel.singleByUserName(req.body.user_name);
//     if (user === null) {
//         return res.render('vwAuth/login', {
//             layout: false,
//             err_message: 'Invalid username or password.'
//         });
//     }
//     const ret = bcrypt.compareSync(req.body.password, user.password);
//     if (ret === false) {
//         return res.render('vwAuth/login', {
//             layout: false,
//             err_message: 'Invalid username or password.'
//         });
//     }

//     req.session.isAuth = true;
//     req.session.authUser = user;

//     let url = req.session.retUrl || '/';
//     res.redirect(url);
// })


// router.post('/logout', async function(req, res) {
//     req.session.isAuth = false;
//     req.session.authUser = null;
//     res.redirect(req.headers.referer);
// })




// router.get('/signup', async function(req, res) {
//     res.render('vwAuth/signup',{
//         layout: false
//     });
// })

// router.post('/signup', async function(req, res) {
//     const hash = bcrypt.hashSync(req.body.password, 10);
//     // const dob = moment(req.body.f_DOB, 'DD/MM/YYYY').format('YYYY-MM-DD');
//     const user = {
//         user_name: req.body.user_name,
//         password: hash,
//         name: req.body.name,
//         email: req.body.email,
//         phone_number: req.body.phone_number,
//         is_active:0
//     }

//     await authModel.add(user);
//     res.render('vwAuth/signup');
// })


// router.get('/is-available', async function(req, res) {
//     const user_name = req.query.user;
//     const user = await authModel.singleByUserName(user_name);
//     if (user === null) {
//         return res.json(true);
//     }
//     res.json(false);
// })


// router.get('/info', auth, async function(req, res) {
//     res.render('vwAuth/login');
// })



// module.exports = router;









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

