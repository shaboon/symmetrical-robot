const { Schema, model } = require('mongoose');

const charactersDataSchema = new Schema({
    id: {
        type: Integer,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,
    },
    height: {
        type: Integer,
    },
    mass: {
        type: Integer,
    },
    gender: {
        type: String,
    },
    homeworld: {
        type: String,
    },
    species: {
        type: String,
    },
    wiki: {
        type: String,
    },
    image: {
        type: String,
    },
    dateCreated: {
        type: Integer,
    },
    dateDestroyed: {
        type: Integer,
    },
    destroyedLocation: {
        type: String,
    },
    creator: {
        type: String,
    },
    manufacturer: {
        type: String,
    },
    model: {
        type: String,
    },
    class: {
        type: String,
    },
    sensorColor: {
        type: String,
    },
    platingColor: {
        type: String,
    },
    born: {
        type: Integer,
    },
    bornLocation: {
        type: String,
    },
    died: {
        type: Integer,
    },
    diedLocation: {
        type: String,
    },
    species: {
        type: String,
    },
    hairColor: {
        type: String,
    },
    eyeColor: {
        type: String,
    },
    skinColor: {
        type: String,
    },
    cybernetics: {
        type: String,
    },
    affiliations: {
        type: String,
    },
    masters: {
        type: String,
    },
    apprentices: {
        type: String,
    },
    formerAffiliations: {
        type: String,
    },
    appearances: {
        type: String,
    },

});

const charactersData = model('charactersData', charactersDataSchema);

module.exports = charactersData;
