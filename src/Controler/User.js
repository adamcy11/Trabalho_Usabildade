import { openDb } from '../configDB.js';

//Cria a tabela User
export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS User ( id INTEGER PRIMARY KEY, nickname TEXT, senha INTEGER)')
    })
}

//Selecionar todos usuario
export async function selectUser(req, res){
    openDb().then(db=>{
    db.all('SELECT * FROM User').then(users =>res.json(users))
    });
}

//Selecionar usuario pelo Id
export async function selectUserById(req, res){
    let id = req.body.id;
    return openDb().then(db=>{
       return db.get('SELECT * FROM User WHERE id=?',[id]).then(user=> res.json(user))
    });
}


//Da insert na tabela de User
export async function insertUser(req , res){
    let user = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO User (nickname, senha) VALUES (?,?)', [user.nickname, user.senha])
    });
    res.json({
        "statusCode":200
    })
} 

//Update no User
export async function updateUser(req , res){
    let user = req.body;
    openDb().then(db=>{
        db.run('UPDATE User SET nickname= ?, senha=? WHERE id= ? ', [user.nickname, user.senha, user.id])
    });
    res.json({
        "statusCode":200
    })
}

// Delete user
export async function deleteUser(req , res){
    let id = req.body.id;
     openDb().then(db=>{
       db.get('DELETE FROM User WHERE id=?',[id]).then(res=>res)
    });
    res.json({
        "statusCode":200
    })
}

//Gerendo uma nova senha a partir do id
export async function newPasswordUser(req, res){
    let user = req.body;
    openDb().then(db=>{
        db.run('UPDATE User SET senha=? WHERE nickname= ? ', [user.senha , user.nickname])
    });
    res.json({
        "statusCode":200
    })
} 

export async function selectUserLogin(req, res){
    
    const query = 'SELECT * FROM User WHERE nickname=? AND senha=? ';
    const user = req.body;
    
    try{
        openDb().then(db=>{
            db.run(query, [user.nickname , user.senha], (err, row)=>{
                if(err){
                    res.json({
                        "statusCode":400,
                        "msg":"Erro no login"
                    }) 
                } 
            })
         });
    } catch (err) {
        // Capturar exceção em caso de erro na execução da consulta
        console.error('Erro ao executar a consulta:', err);
      }
            
    }