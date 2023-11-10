import { Router } from 'express';
import { helloWorldController } from './controllers/testController.js';
import * as userController from './controllers/user/userController.js';
import * as caregiverController from './controllers/caregiver/caregiverController.js';
import * as orderController from './controllers/order/orderController.js';
import * as reviewController from './controllers/review/reviewController.js';
import * as serviceRatesController from './controllers/serviceRates/serviceRatesController.js';
import * as aggregateRatingController from './controllers/Agregate/AgregateControler.js'; 
import * as getReviewsForOrderController from './controllers/Get-review/GetReviewControler.js'; 

const router = Router();
const ratingController = require("./controllers/Agregate/AgregateControler.js");

router.get("/order/:orderId/rating", ratingController.getAggregateRating);

router.get('/', helloWorldController);

router.get('/user/:user_id', userController.getSingleUserController);
router.get('/user/:user_id/orders', orderController.getAllOrdersByUserController);
router.post('/user', userController.createUserController);

router.get('/caregiver/:caregiver_id', caregiverController.getSingleCaregiverDetailController);
router.post('/caregiver/', caregiverController.createCaregiverController);

router.get('/order/:order_id', orderController.getOneOrderController);
router.post('/order', orderController.createOrderController);
router.put('/order/:order_id', orderController.updateOrderController);

router.post('/order/:order_id/review', reviewController.createReviewController);

router.get('/service/:service_id/rates', serviceRatesController.getServiceRatesController);
router.post('/service/:service_id/rates', serviceRatesController.createServiceRatesController);


// Rute untuk fungsi get review
router.get('/order/:order_id/reviews', reviewController.getReviewsForOrderController);


// Rute untuk fungsi aggregate rating
router.get('/order/:order_id/rating', aggregateRatingController.getAggregateRatingController);

export default router;
