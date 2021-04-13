const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El campo nombre es requerido.']
    },
    email: {
        type: String,
        required: [true, 'El campo email es requerido.']
    },
    password: {
        type: String,
        required: [true, 'El campo password es requerido.']
    },
    google: Boolean,
    role: String,
    img: String,
    estado: {
        type: Boolean,
        default: true
    }
}, { collection: 'usuario' });

module.exports = mongoose.model('usuario', usuarioSchema);