const express = require('express');
const casual = require('casual');

const conferenceParticipantModel = require('../models/conferenceParticipant.model');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'conferenceParticipant'
    })
})

router.post('/', async (req, res) => {
    const { user_id, conference_id } = req.body;
    console.log('user_id: ', user_id)

    if (user_id === '' || user_id === undefined || conference_id === '' || conference_id === undefined) {
        return res.json({
            status: -1,
            msg: 'join failed'
        });
    }
    const id = casual.uuid;

    const entity = {
        user_id,
        conference_id,
        id,
        status: 0
    }
    let ret = await conferenceParticipantModel.joinConference(entity);
    res.json({
        status: 1,
        msg: 'join completed, waiting for admin'
    })

})


module.exports = router;