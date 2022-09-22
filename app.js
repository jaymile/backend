const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//let router = require("express").Router();

const immobilier_routes = require('./routes/immobilier.routes')

const db = require("./models");

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
    
    
    app.use(express.json());
    app.use(bodyParser.json());

    
     app.use("/api/immobilier", immobilier_routes);
     /**
    // simple route
     * 
     app.get("/", (req, res) => {
       res.json({ message: "Welcome to JAYMILZS application." });
      });
      */
    module.exports = app;
    
    
    
    
