const express = require('express');
const db = express.Router();
const Comics = require('../models/comics');

db.get('/', async (req,res) =>{
    const comics = await Comics.find();
    res.json(comics);
})

db.post('/', async(req, res) =>{//optiene la puntuacion del cliente
    const{ title,img,score} = req.body;
    const rank = new Comics({title,img,score});
    await rank.save();//guarda en la base de datos
    res.json({status:'Saved Sore'});
  });
  
module.exports = db;