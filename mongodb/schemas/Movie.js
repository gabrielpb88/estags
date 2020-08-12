const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    plot: String,
    genres: String,
    runtime: String,
    cast: Array,
    num_mflix_comments: Number,
    title: String,
    fullplot: String,
    countries: Array,
    released: Date,
    directors: Array,
    rated: String,
    awards: Object,
    lastupdated: Date,
    year: Number,
    imdb: Object,
    type: String,
    tomatoes: Object
})

module.exports = mongoose.model('Movie', MovieSchema)