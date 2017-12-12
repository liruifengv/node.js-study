let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/photo_app', {
  useMongoClient: true
})

let schema = new mongoose.Schema({
  name: String,
  path: String
})

module.exports = mongoose.model('Photo', schema)