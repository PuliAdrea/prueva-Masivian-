const mongoose = require('mongoose');
const URI = 'mongodb://localhost/comicsc3';

mongoose.connect(URI,{useNewUrlParser: true})//coneccion a la base de datos
  .then(db => console.log('LA BASE DE DATOS ESTA CONECTADA'))
  .catch(error => console.error(error));

module.exports = mongoose;

