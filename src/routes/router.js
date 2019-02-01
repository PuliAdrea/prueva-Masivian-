const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const Comics = require('../models/comics');

//genera rutas diferentes en un rango de 0 a 2103
let random =Math.floor(Math.random() * 2104);
let rutaAleatoria =  `https://xkcd.com/${random}/info.0.json`;


router.get('/', async(req,res) =>{
    let comics = await fetch(rutaAleatoria,);
    comics = await comics.json();
    res.send(comics); 
   /*  const{ title,img} = req.body;
    const newComic = new Comics({title,img});
    await newComic.save(); */
     });
 module.exports = router;
