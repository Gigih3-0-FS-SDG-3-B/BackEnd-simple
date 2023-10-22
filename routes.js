import { Router } from 'express'
import { helloWorldController } from './controllers/testController.js';
import * as userController from './controllers/user/userController.js';
import * as orderController from './controllers/order/orderController.js';

const router  = Router();
router.get('/', helloWorldController);

router.post('/user', userController.createUserController);
router.post('/caregiver', userController.createCaregiverController);

router.get('/order/:order_id', orderController.getOrderController);
router.post('/order', orderController.createOrderController);

export default router;