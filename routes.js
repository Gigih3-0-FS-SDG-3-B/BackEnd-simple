
import { Router } from 'express';
import { helloWorldController } from './controllers/testController.js';
import userRoutes from './routes/userRoutes.js';
import caregiverRoutes from './routes/caregiverRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import serviceRatesRoutes from './routes/serviceRatesRoutes.js';
import { authenticateUser, checkAdmin } from './middlewares/authMiddleware.js';
import * as adminController from './controllers/admin/adminController.js'; 

const router = Router();

router.get('/', helloWorldController);

router.use('/user', userRoutes);
router.use('/caregiver', caregiverRoutes);
router.use('/order', orderRoutes);
router.use('/review', reviewRoutes);
router.use('/service', serviceRatesRoutes);

router.get('/admin/some-route', checkAdmin, adminController.someAdminRoute);

router.put('/event/:event_id/cancel', eventController.cancelEventController);
router.post('/event', eventController.createEventController);

export default router;