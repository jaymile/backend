const mongoose = require('mongoose');
const { schema } = mongoose;

const userSchema = new Schema({
    firstname:{type: String, required:true},
    lastname:{type: String, required:true},
    email:{type: String, required:true},
    password:{type: String, required:true},
    telephone:{type: Number, required:false},
    createdAt:{type: Date, required:true}
});

module.exports = mongoose.model("User", userSchema);