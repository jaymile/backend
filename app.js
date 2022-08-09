const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require("./config/db.config");
const bodyParser = require('body-parser');

//const immobilier = require('./models/Immobilier');
const app = express();
require('dotenv').config();

const db = require("./models")

mongoose.connect(db.url,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());
app.use(bodyParser.json());




app.use((req,res)=>{
    res.json({message: "votre requete a bien ete recu !"});
});




module.exports = app;