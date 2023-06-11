import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';



//Instancia o app recebendo express e usar json para mostrar os valores GET/POST
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//importando rotas
import route from './routes.js';
app.use(route);



//Configurando o servidor na porta 3000
app.listen(3000, ()=>console.log("Server node runnig in port 3000" ))
https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, ()=>console.log("Rodando em HTTPs")
)



