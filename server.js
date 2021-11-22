//arquivo que será excecutado com node.js para criar 
// o servidor backend - comando node server.js - com nodemon: npm run start:server

//const pq não será alterado 
//require é sintaxe de importação em nodejs, importa o pacote e armazena o conteúdo
//http pacote nodejs padrão que foi importado na instalação no sistema
const http = require('http');

//importando app.js
const app = require('./backend/app')

//definindo a porta
const port = 3000;
app.set('port', port);

//aqui o servidor é criado
const server = http.createServer(app);

//aqui o servidor é ativado - porta para o servidor
server.listen(port);
