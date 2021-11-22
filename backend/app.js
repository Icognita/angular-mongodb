//metodo de import do nodejs, importando express
const express = require("express");
const bodyParser = require("body-parser");

//importar mongoose
const mongoose = require("mongoose");

//importanto schema do mongodb
const Comentario = require('./models/comentario');

//executando express como uma função 
const app = express();

//conectar ao mongoose
mongoose.connect("mongodb+srv://mirian_menezes:mirian_menezes@cluster0.ktqwr.mongodb.net/cursojs?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado ao banco de dados!');
    })
    .catch(() => {
        console.log('Falha na conexão!');
    })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    //metodo setHeader, primeiro argumento é a chave/identificador
    //o segundo argumento é o valor  
    //digitar a chave exatamente assim, pois é como o browser entende
    // "*" significa acesso permitido a qualquer app que requisitar
    res.setHeader("Access-Control-Allow-Origin", "*");
    //adicionando alguns acessos especificos
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/comentarios", (req, res) => {
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
app.get("/api/comentarios", (req, res) => {
    Comentario.find().then(documents => {
        res.status(200).json({
            message: 'Comentarios carregados com sucesso',
            comentarios: documents
        });
    });
});

//metodo delete documento
app.delete("/api/comentarios/:id", (req, res) => {
    Comentario.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(202).json({ message: 'Comentário deletado' });
    });
});

//export app - sintaxe nodejs
module.exports = app;