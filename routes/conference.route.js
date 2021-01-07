const express = require('express');
const conferenceModel = require('../models/conference.model');
const router = express.Router();

router.get('/', async (req, res) => {
    const idVenue = req.query['id-venue'];
    const time = req.query.time;
    const sort = req.query.sort;
    let ret;
    ret = await conferenceModel.conferences(idVenue, time, sort);

    res.json({
        data: ret
    })

})



// lấy danh sách hội nghị theo id phòng
// lấy danh sách hội nghị theo thời gian
// sort a -> Z
// sort z -> a
module.exports = router;