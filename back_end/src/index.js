const cors = require('cors');
const express = require('express'); // importa o módulo do framework 
const https = require('https');
const fs = require('fs');
const people = require('./routes/people.routes');

const app = express(); // cria uma instância do servidor web do Express.js para tratarmos de 
app.use(cors());
app.use(people);// ultiliza as rotas, midllewares entre outro criados

const options = {
    key: fs.readFileSync('./SSL/localhost-key.pem'),
    cert: fs.readFileSync('./SSL/localhost.pem')
};

https.createServer(options, app)
    .listen(3001, () => {
        console.log('Express started at https://localhost:3001');
    });

console.log(process.versions.v8);
