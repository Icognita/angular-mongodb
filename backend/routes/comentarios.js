const express = require("express");

const router= express.Router();

//importanto schema do mongodb
const Comentario = require('../models/comentario');
const cheCkAuth=require("../midleware/check-auth")


router.post("",  (req, res) => {
    //criando novo obj no formato do schema, já com id
    const comentario = new Comentario({
        nome: req.body.nome,
        texto: req.body.texto
    });
    comentario.save();
    res.status(201).json({
        message: "Comentario salvo com sucesso!"
    });
});

//criando rotas para os comentarios dos alunos com '/comentarios'
//metodo para "trazer" documentos do banco de dados
router.get("", (req, res) => {
    Comentario.find().then(documents => {
        res.status(200).json({
            message: 'Comentarios carregados com sucesso',
            comentarios: documents
        });
    });
});

//metodo delete documento cheCkAuth
router.delete("/:id", (req, res) => {
    Comentario.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(202).json({ message: 'Comentário deletado' });
    });
});
 module.exports =router