import { openDb } from '../configDB.js';

//Cria a tabela User
export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS User ( id INTEGER PRIMARY KEY, nickname TEXT, senha INTEGER)')
    })
}

//Da insert na tabela de User
export async function insertUser(user){
    openDb().then(db=>{
        db.run('INSERT INTO User (nickname, senha) VALUES (?,?)', [user.nickname, user.senha])
    });
} 

//Update no User
export async function updateUser(user){
    openDb().then(db=>{
        db.run('UPDATE User SET nickname= ?, senha=? WHERE id= ? ', [user.nickname, user.senha, user.id])
    });
}

//Gerendo uma nova senha a partir do id
export async function newPasswordUser(user){
    openDb().then(db=>{
        db.run('UPDATE User SET senha=? WHERE nickname= ? ', [user.senha , user.nickname])
    });
} 

//Selecionar todos usuario
export async function selectUser(){
    return openDb().then(db=>{
       return db.all('SELECT * FROM User').then(res=>res)
    });
}

//Selecionar usuario pelo Id
export async function selectUserById(user){
    return openDb().then(db=>{
       return db.get('SELECT * FROM User WHERE id=?',[user.id]).then(res=>res)
    });
}

// Delete user
export async function deleteUser(id){
    return openDb().then(db=>{
       return db.get('DELETE FROM User WHERE id=?',[id]).then(res=>res)
    });
}