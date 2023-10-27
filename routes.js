import { Router } from 'express'
import { helloWorldController } from './controllers/testController.js';
import * as userController from './controllers/user/userController.js';
import * as caregiverController from './controllers/caregiver/caregiverController.js';
import * as orderController from './controllers/order/orderController.js';

const router  = Router();
router.get('/', helloWorldController);

router.get('/user/:user_id', userController.getSingleUserController);
router.get('/user/:user_id/orders', orderController.getAllOrdersByUserController);
router.post('/user', userController.createUserController);

router.get('/caregiver/:caregiver_id', caregiverController.getSingleCaregiverDetailController);
router.post('/caregiver/', caregiverController.createCaregiverController);

router.get('/order/:order_id', orderController.getOneOrderController);
router.post('/order', orderController.createOrderController);
router.put('/order/:order_id', orderController.updateOrderController);

export default router;