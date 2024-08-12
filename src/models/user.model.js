const mongoose = require('mongoose'); 
// import mongoose from 'mongoose'; ES LO MISMO
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    lastname: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: Int32Array,
        required: true
    } 
}); //

const User = mongoose.model('User', userSchema);

/* const nuevoUsuario = new User({
    username:"Isael",
    password:"2468"
}); */

const creaUsuario = async (req, res) => {
    await nuevoUsuario.save();
} 
module.exports = User;
// module.exports = {User /*, creaUsuario*/ };