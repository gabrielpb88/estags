const elasticsearch = require('elasticsearch')
const fs = require('fs')

const client = new elasticsearch.Client({
  host: 'localhost:9201',
  // log: 'trace'
})

// client.indices.create({
//   index: 'movies'
// })

// client.indices.delete({
//   index: 'movies'
// })

const file = fs.readFileSync('../../movie.json', { encoding: 'utf-8' }).split('\n')

try {
  let array = []

  for (var i = 0; i < file.length; i++) {
    array.push({ "index": {} })
    let current = JSON.parse(file[i])
    delete current._id
    array.push(current)
  }
  //   file.forEach((item) => {
  //     array.push({ "index": {} })
  //     let current = JSON.parse(item)
  //     delete current._id
  //     array.push(current)
  //   })

  client.bulk({
    index: 'movies',
    method: 'post',
    body: array
  }).then(e => console.log('Sucesso:', e.items.length)).catch(err => console.log('Deu ruim:', err))
} catch (e) {
  console.log(e);
}