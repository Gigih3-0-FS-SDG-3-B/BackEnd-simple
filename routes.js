import { Router } from 'express'
import { helloWorldController } from './controllers/testController.js';

const router  = Router();
router.get('/', helloWorldController);

export default router;