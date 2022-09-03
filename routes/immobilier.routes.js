const express = require('express');
const router = express.Router();
const immobilier = require("../controllers/immobilier.controller");


router.post("/create", 
    immobilier.create
);
router.get("/findAll", 
    immobilier.findAll
);


module.exports = router;