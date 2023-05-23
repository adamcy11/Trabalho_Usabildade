import { Router } from 'express';
import { createTable, insertUser, newPasswordUser, updateUser, selectUser, selectUserById, deleteUser } from './Controler/User.js';

const router = Router(); 

//CRUD User
router.get('/users' , selectUser);

router.get('/user' , selectUserById);

router.post('/user' , insertUser);

router.put('/user' , updateUser);

router.delete('/user' , deleteUser);

//Funcões proprias
router.post('/esqueciSenha' , newPasswordUser);

//TODO:
//Fazer função que validada usuario para login
//Fazer classe review e classe jogo




export default router;
