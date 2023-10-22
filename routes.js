import { Router } from 'express'
import { helloWorldController } from './controllers/testController.js';
import { createUserController } from './controllers/user/userController.js';

const router  = Router();
router.get('/', helloWorldController);
router.post('/user', createUserController);

export default router;