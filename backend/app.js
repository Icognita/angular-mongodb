//metodo de import do nodejs, importando express
 const express = require("express");
const bodyParser = require("body-parser");

//importar mongoose
const mongoose = require("mongoose");
//rotas comentarios e user
const comentariosRouter = require("./routes/comentarios");
const userRouter = require("./routes/user");
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
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});
/// configuração de rotas
app.use(  '/api/comentarios', comentariosRouter);
app.use(  '/api/user', userRouter);
//export app - sintaxe nodejs
module.exports = app;
