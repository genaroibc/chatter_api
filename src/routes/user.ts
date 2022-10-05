import { Router } from 'express';
import {
	getUsers,
	getUser,
	deleteUser,
	createUser,
	logInUser
} from '../controllers/user.controller';
import { isAuth } from '../controllers/auth.controller';

const router = Router();

/*
    USERS ROUTES
*/
router.get('/user', getUsers);
router.get('/user/:userId', getUser);
router.delete('/user/:userId', isAuth, deleteUser);
router.post('/user/create', createUser);
router.post('/user/login', logInUser);

export default router;
