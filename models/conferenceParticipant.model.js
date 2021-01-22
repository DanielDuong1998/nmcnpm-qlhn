const db = require('../utils/db');
module.exports = {
    joinConference: entity => {
        return db.add(entity, 'conference_participants');
    },
    checkConferenceParticipant: async (idUser, idConference) => {
        // const sql = `select status from conference_participants where conference_id = '${idConference}' and user_id = '${idUser}'`;
        const sql = `select status from conference_participants where conference_id = '${idConference}' and user_id = '${idUser}'`;
        const ret = await db.load(sql);
        return ret;
    },
    listParticipant: async_ => {
        const sql = `select conference_participants.id, user.name, user.email, conference.name as conference_name from user, conference, conference_participants where conference_participants.user_id = user.id and conference_participants.conference_id = conference.id and conference_participants.status = 0`;
        return db.load(sql);
    },
    approval: (id, mode) => {
        const sql = `update conference_participants set status = ${mode} where id = '${id}'`;
        return db.load(sql);

    }
}