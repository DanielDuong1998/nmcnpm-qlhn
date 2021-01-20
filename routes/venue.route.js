const express = require('express');
const venueModel = require('../models/venue.model');
const router = express.Router();

router.get('/', async (req, res) => {
    const ret = await venueModel.venues();
    res.json({
        data: ret
    })
})


module.exports = router;