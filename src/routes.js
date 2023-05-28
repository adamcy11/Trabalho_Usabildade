import { Router } from 'express';
import {insertUser, newPasswordUser, updateUser, selectUser, selectUserById, deleteUser, } from './Controller/User.js';
import {login} from './Controller/Login.js';
const router = Router(); 

//CRUD User
router.get('/users' , selectUser);

router.get('/user' , selectUserById);

router.post('/user' , insertUser);

router.put('/user' , updateUser);

router.delete('/user' , deleteUser);

//Funcões proprias
router.post('/esqueciSenha' , newPasswordUser);

router.post('/login' , login);

//TODO:
//Fazer função que validada usuario para login
//Fazer classe review e classe jogo


  


export default router;
