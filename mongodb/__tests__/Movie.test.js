require('dotenv').config()
const Movie = require('../schemas/Movie')
const mongoose = require('mongoose')

describe('Testes utilizando Mongoose com Aggregate', () => {

  beforeAll(async () => {
    const DB_URL = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`
    mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  })

  it('Query using $project, $sort, $skip, $limit ', async () => {
    const aggregate = await Movie.aggregate([
      { $project: { _id: 0, title: 1 } },
      { $sort: { 'imdb.rating': 1, title: 1 } },
      { $skip: 1 },
      { $limit: 5 }
    ]).exec()
    expect(aggregate.length).toBe(5)
  })

  afterAll(async done => {
    await mongoose.connection.close()
    await done()
  })
})