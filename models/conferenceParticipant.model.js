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
    }
}