//const db = require("../models/Immobilier.models");
//const Immobilier = db.immobilier;
const Immobilier = require('../models/Immobilier.models');



exports.create = (req, res, next)=>{
    if(!req.body){//obligation de remplire tout les champs
        res.status(400).send({message: "tout les champs sont obligatoire"})
    }
    const immobilier = new Immobilier({
        titre: req.body.titre,
        maison: req.body.maison,
        appartement: req.body.appartement,
        autre: req.body.autre,
        piece: req.body.piece,
        etage: req.body.etage,
        departement: req.body.departement,
        ville: req.body.ville,
        surfaceH: req.body.surfaceH,
        surfaceT: req.body.surfaceT,
        prix: req.body.prix,
        description: req.body.description,
        publier: req.body.publier ? req.body.publier : false
    });

    immobilier
        .save(immobilier)
        .then(()=>res.status(201).json({message: "votre bien a été bien enregistré "}))
        .catch(err =>{
            res.status(400).send({
                message: err.message || "erreur lors de la creation de votre bien"
            });
        });


};

exports.findAll = (req, res)=>{
const titre = req.body.titre;
let condition = titre ? {titre: {regex: new RegExp(titre),$options: "i"} }:{};
Immobilier.find(condition)
    .then(data =>{res.send(data)})
    .catch(err =>{res.status(500).send({
        message: err.message || "erreur lors de la recherche des biens ."
    }
    )})
}
exports.findOne = (req, res)=>{
    
}

/**
* 
exports.update = (req, res)=>{
    
}

exports.delete = (req, res)=>{
    
}

exports.deleteAll = (req, res)=>{
    
}


*/