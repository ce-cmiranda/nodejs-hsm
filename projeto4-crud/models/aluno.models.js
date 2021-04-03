const mongoose = require('mongoose');
const Aluno = mongoose.Schema({
    nome: String,
    media: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Aluno', Aluno)