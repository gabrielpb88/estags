require('dotenv').config()
const fs = require('fs')
const mongoose = require('mongoose')
const User = require('./schemas/User')
const Movie = require('./schemas/Movie')

const DB_URL = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

// Movie.find().then(res => {
//   const documents = []
//   res.map(movie => {})
// }
// ).catch(err => clg(err))

Movie.find().then(res => {

    let objs = ''
    res.forEach(movie => {
        objs += JSON.stringify(movie) + '\n'
    })
    fs.writeFileSync('../movie.json', objs)
    process.exit(0)
})