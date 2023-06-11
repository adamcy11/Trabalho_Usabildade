import { Router } from 'express';
import {insertUser, newPasswordUser, updateUser, selectUser, selectUserById, deleteUser, } from './Controller/User.js';
import {login} from './Controller/Login.js';
import {insertReview, selectReviewAll, selectReviewByGame, updateReview, deleteReview } from './Controller/Review.js';
const router = Router(); 

//CRUD User
router.get('/users' , selectUser);
router.get('/user' , selectUserById);
router.post('/user' , insertUser);
router.put('/user' , updateUser);
router.delete('/user' , deleteUser);

//CRUD Comentario
router.post('/review' , insertReview);
router.get('/re' , selectReviewAll);
router.get('/review',selectReviewByGame);
router.put('/review' , updateReview);
router.delete('/review' , deleteReview);


//Funcões proprias
router.post('/esqueciSenha' , newPasswordUser);
router.post('/login' , login);

//TODO:
//Fazer classe review e classe jogo


  


export default router;
