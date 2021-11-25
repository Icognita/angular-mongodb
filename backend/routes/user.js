// p/ pegar o pacote p/ criptografia npm i --save bcrypt
const express = require("express");
//importando o bcrypt
const bcrypt = require("bcrypt")
//importando o JWT
const jwt = require("jsonwebtoken")
// importando o esquema
const User = require("../models/user");
const user = require("../models/user");

const router = express.Router();

//rota para criar um novo usuário no banco
router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(result => {
          res.status(201).json({
            message: "Usuário cadastrado!",
            result: result
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    });
});
 // quando autenticado retorna um objeto do token
// cirptografia de usuário/// site jwt-Json Web Tokens/ pacote npm i --save jsonwebtoken pacote de terceiros
router.post("/login", (req, res, next) => {
   let buscarUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Falha na autenticação"
        });
      }
      buscarUser= user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
        //  console.log(result)
      if (!result) {
        return res.status(401).json({
          message: "Falha na autenticação"
        });
      }
      //esse metodo cria um novo token  seguido o objeto de escolha, segundo argumento | insere um segredo . 3| expiresIn tem que vai expira
      const token = jwt.sign({ email: buscarUser.email, userId: buscarUser._id},
        "senha_secreta_muito_longa", { expiresIn:"1h"}
      );
      console.log(token)
      res.status(200).json({
          token:token
      });
    })
    .catch(err => {
        
      return res.status(401).json({
        message: "Falha na autenticação"
      });
    });
});








module.exports = router
