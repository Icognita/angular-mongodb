const mongoose = require('mongoose');

const comentarioSchema = mongoose.Schema({
    nome: { type: String, required: true },
    texto: { type: String, required: true }
});

module.exports = mongoose.model('Comentario', comentarioSchema);
