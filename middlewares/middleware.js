const jwt = require('jsonwebtoken');

const config = require('../configs/default.json')

module.exports = {
    verifyAccessToken: (req, res, next) => {
        let access_token = req.headers['x-access-token'];
        let payload = '';
        jwt.verify(access_token, config.auth.secretPassword, (err, pl) => {
            if (err) {
                return res.json({ status: -1 })
            }
            else {
                payload = pl;
            }
        });
        req.body.role = payload.mode;
        req.body.id = payload.id;
        next();
    }
}