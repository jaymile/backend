const mongoose = require('mongoose');
const { schema } = mongoose;

const immobilierSchema = mongoose.Schema({
    maison:{type: String, required:true},
    appartement:{type: String, required:true},
    autre:{type: String, required:true},
    piece:{type: Number, required:true},
    etage:{type: Number, required:true},
    departement:{type: Number, required:true},
    ville:{type: String, required:true},
    surfaceH:{type: Number, required:true},
    surfaceT:{type: Number, required:true},
    price:{type: Number, required:true},
    createdAt:{type: Date, required:true},
    updatedAt:{type: Date, required:true}
});

module.exports = mongoose.model("Immobilier", immobilierSchema)
