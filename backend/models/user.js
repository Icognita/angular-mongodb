const mongoose = require('mongoose');
// plugin- que verifica os dados antes de salvar
const uniqueValidator =require("mongoose-unique-validator")

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true }
});

//metodo plugin// que valida um email já existente
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);