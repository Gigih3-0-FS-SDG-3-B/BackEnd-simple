import { Router } from 'express';
import { helloWorldController } from './controllers/testController.js';
import * as userController from './controllers/user/userController.js';
import * as caregiverController from './controllers/caregiver/caregiverController.js';
import * as orderController from './controllers/order/orderController.js';
import * as reviewController from './controllers/review/reviewController.js';
import * as serviceRatesController from './controllers/serviceRates/serviceRatesController.js';
import * as eventController from './controllers/Create Event/Create-Event_controler.js'; 
import * as scheduleController from './controllers/GetSchedule/GetScheduleControler.js';
import * as aggregateRatingController from './repositories/AgregateRepository.js'; 
import * as getReviewsForOrderController from './controllers/Get-review/GetReviewControler.js'; 
import * as ratingController from "./controllers/Agregate/AgregateControler.js"; 

const router = Router();

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

// Rute untuk fungsi cancel event
router.put('/event/:event_id/cancel', eventController.cancelEventController); //done

// Rute untuk fungsi create event
router.post('/event', eventController.createEventController); // Done

// Rute untuk fungsi get review
router.get('/order/:order_id/reviews', getReviewsForOrderController.getReviewsForOrderController); // DONE

// Rute untuk fungsi get schedule
// router.get('/order/:order_id/schedule', scheduleController.getScheduleForOrderController); // Tidak ada tabel schedule

// Rute untuk fungsi Review List
router.get('/reviews', reviewController.getReviewsForOrderController2); // DONE

// Rute untuk fungsi aggregate rating
router.get('/order/:order_id/rating', aggregateRatingController.calculateAggregateRating); // DONE

export default router;

