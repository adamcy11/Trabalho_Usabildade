import express from 'express';

//Instancia o app recebendo express e usar json para mostrar os valores GET/POST
const app = express();
app.use(express.json());

//importando rotas
import route from './routes.js';
app.use(route);

//Configurando o servidor na porta 3000
app.listen(3000, ()=>console.log("Server node runnig in port 3000"))