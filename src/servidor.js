const  express = require('express');
const app = express();
const router = require("./routes/router");

const path = require('path');
const morgan = require('morgan');
const { mongoose } = require('./database');

const port = 3000;
//midelwares
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use("/api/comics",router);
app.use("/api/db",require('./routes/comics.routers'));
//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Escuchando por el puerto ${port}!`));