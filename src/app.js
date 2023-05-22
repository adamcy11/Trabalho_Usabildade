
import { createTable, insertUser, newPasswordUser, updateUser, selectUser, selectUserById, deleteUser } from './Controler/User.js';
import express from 'express';

//Instancia o app recebendo express 
const app = express();

//Mostrar os valores GET/POST via Json 
app.use(express.json());

//Metódo do banco de dados
createTable();

//Rota get para raiz da aplicação
app.get('/' , function(req, res){
    res.send("Olá Mundoooo");
})

//Mostrar todos os usuarios 
app.get('/user' , async function(req, res){
    //Variavel users aguarda todos os usuarios recebidos de selectUser
    let users = await selectUser(); 
    res.json(users);
})

//Mostrar apenas um pessoa por id
app.get('/userById' , async function(req, res){
    let user = await selectUserById(req.body); 
    res.json(user);
})

//Rota post para /user para coletar a requisição
app.post('/user', function(req, res){
    //Coleta o insert de pessoa do body
    insertUser(req.body);
    res.json({
        "statucCode":200
    })

})

app.put('/user', function(req, res){
    //Atualiza os dados apartir do Id, caso o Id não seja informado, terá uma mensagem de erro
    if(req.body && !req.body.id){
        res.json({
            "statusCode":400,
            "mgs" : "id incorreto"
        })
    } else {
        updateUser(req.body);
        res.json({
            "statucCode":200
        })
    }
})

/*
app.put('/user', function(req, res){
    //Altera a senha a partir do nickname, caso nickname esteja incorreto
    newPasswordUser(req.body);
    res.json({
        "statusCode":200
    })

})*/

//Delete User
app.delete('/user' , async function(req, res){
    let user = await deleteUser(req.body.id); 
    res.json(user);
})

//Configurando o servidor na porta 3000
app.listen(3000, ()=>console.log("Server node runnig in port 3000"))