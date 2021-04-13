const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El campo nombre es requerido']
    },
    precioUni: {
        type: Number,
        required: [true, 'El precio unitario es requerido']
    },
    categoria: {
        type: mongoose.Types.ObjectId,
        ref: 'categoria',
        required: [true, 'El campo categoria es requerido.']
    },
    disponible: {
        type: Boolean,
        required: [true, 'Es necesario especificar la disponibilidad del producto.']
    },
    usuario: {
        type: mongoose.Types.ObjectId,
        ref: 'usuario'
    }
}, { collection: 'producto' });

module.exports = mongoose.model('producto', productoSchema);