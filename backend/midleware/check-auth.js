const jwt =require("jsonwebtoken");
module.exports=(req,res, next)=>{
    try{
    const token = req.headers.authorization.split("")[1];
    jwt.verify(token,"senha_secreta_muito_longa");
    next();
    }catch (erro){
        res.status(401).json({message:" falha na autenticação"})
    }
}