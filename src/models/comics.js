const mongoose = require('mongoose');
const { Schema } = mongoose;
//deifine el esquema de los datos
const ComicSchema = new Schema({
    title: String,
    img: String ,
    score: Number
});

module.exports = mongoose.model('Comic', ComicSchema);