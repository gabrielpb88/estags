require('dotenv').config()
const mongoose = require('mongoose')
const User = require('./schemas/User')
const Movie = require('./schemas/Movie')

const DB_URL = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })