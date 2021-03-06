var mongoose = require('mongoose');

//Genre Schema
var genreSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

//get genres
module.exports.getGenres = function(callback, limit){
  Genre.find(callback).limit(limit);
}

//add genres
module.exports.addGenre = function(genre, callback){
  var query = {_id : id};
  var update = {
    name: genre.name
  }
  Genre.findOneAndUpdate(query, update, options, callback);
}

//delete genre
module.exports.removeGenre = function(id, callback){
  var query = {_id: id};
  Genre.remove(query, callback);
}
