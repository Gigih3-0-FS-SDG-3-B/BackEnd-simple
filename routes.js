import { Router } from 'express';
import { helloWorldController } from './controllers/testController.js';
import * as userController from './controllers/user/userController.js';
import * as caregiverController from './controllers/caregiver/caregiverController.js';
import * as orderController from './controllers/order/orderController.js';
import * as reviewController from './controllers/review/reviewController.js';
import * as serviceRatesController from './controllers/serviceRates/serviceRatesController.js';
import { authenticateToken } from './controllers/auth/jwt_auth.js';

const router = Router();

router.get('/', helloWorldController);

// Apply the authenticateToken middleware to protected routes
router.get('/user/:user_id/orders', authenticateToken, orderController.getAllOrdersByUserController);
router.put('/order/:order_id', authenticateToken, orderController.updateOrderController);
router.post('/order/:order_id/review', authenticateToken, reviewController.createReviewController);
router.get('/service/:service_id/rates', authenticateToken, serviceRatesController.getServiceRatesController);
router.post('/service/:service_id/rates', authenticateToken, serviceRatesController.createServiceRatesController);

// Continue with your non-protected routes
router.get('/user/:user_id', userController.getSingleUserController);
router.post('/user', userController.createUserController);

router.get('/caregiver/:caregiver_id', caregiverController.getSingleCaregiverDetailController);
router.post('/caregiver/', caregiverController.createCaregiverController);

router.get('/order/:order_id', orderController.getOneOrderController);
router.post('/order', orderController.createOrderController);

export default router;
