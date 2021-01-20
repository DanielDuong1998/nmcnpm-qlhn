const db = require('../utils/db');
module.exports = {
    joinConference: entity => {
        return db.add(entity, 'conferenceParticipants');
    },
    checkConferenceParticipant: (idUser, idConference) => {

    }
}