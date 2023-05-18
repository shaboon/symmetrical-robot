const { Schema, model } = require('mongoose');

const watchListSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    // description: {
    //     type: String,
    // },
    // image: {
    //     type: String,
    // },
    // link: {
    //     type: String,
    // },
    // rating: {
    //     type: String,
    // },
    // genre: {
    //     type: String,
    // },
    // year: {
    //     type: String,
    // },
    // director: {
    //     type: String,
    // },
    // actors: {
    //     type: String,
    // },
    // runtime: {
    //     type: String,
    // },
    // imdbID: {
    //     type: String,
    // },
    // type: {
    //     type: String,
    // },
    // user: {
    //     type: String,
    // },
});

const watchListData = model('watchListData', watchListDataSchema);

module.exports = watchList;