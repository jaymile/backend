const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const app = require("./app")

const db = require("./models")

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route

// set port, listen for requests
const PORT = process.env.PORT || 8080;
require("./routes/immobilier.routes");
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

  mongoose.connect(db.url,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
    

