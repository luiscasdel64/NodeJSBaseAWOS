const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El campo nombre es requerido']
    },
    usuario: {
        type: mongoose.Types.ObjectId,
        ref: 'usuario'
    }
}, { collection: 'categoria' });

module.exports = mongoose.model('categoria', categoriaSchema);