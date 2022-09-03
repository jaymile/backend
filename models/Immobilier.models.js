const mongoose = require('mongoose');
const { schema } = mongoose.Schema;

const immobilierSchema = mongoose.Schema({
    titre:{type: String, required:true},
    maison:{type: String, required:true},
    appartement:{type: String, required:true},
    autre:{type: String, required:true},
    piece:{type: Number, required:true},
    etage:{type: Number, required:true},
    departement:{type: Number, required:true},
    ville:{type: String, required:true},
    surfaceH:{type: Number, required:true},
    surfaceT:{type: Number, required:true},
    prix:{type: Number, required:true},
    description:{type: String, required:true},
    publier:{ type: Boolean}
},
{
timestamps: true
}
)


 /* methode prevue pour le frontend car _id vs id
 schema.methode("toJSON", ()=>{
     const{ __v, _id, ...Object} = this.toObject();
     Object.id = _id;
     return Object
    });
    
    */
   
    module.exports = mongoose.model("Immobilier", immobilierSchema)
