import { Router } from 'express';
import { createTable, insertUser, newPasswordUser, updateUser, selectUser, selectUserById, deleteUser, selectUserLogin } from './Controler/User.js';

const router = Router(); 

//CRUD User
router.get('/users' , selectUser);

router.get('/user' , selectUserById);

router.post('/cadastro' , insertUser);

router.put('/user' , updateUser);

router.delete('/user' , deleteUser);

//Funcões proprias
router.post('/esqueciSenha' , newPasswordUser);

router.post('/user' , selectUserLogin);

//TODO:
//Fazer função que validada usuario para login
//Fazer classe review e classe jogo




export default router;
