import { Router } from 'express';
import { helloWorldController } from './controllers/testController.js';
import userRoutes from './routes/userRoutes.js';
import caregiverRoutes from './routes/caregiverRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import serviceRatesRoutes from './routes/serviceRatesRoutes.js';

const router = Router();

router.get('/', helloWorldController);

router.use('/user', userRoutes);
router.use('/caregiver', caregiverRoutes);
router.use('/order', orderRoutes);
router.use('/review', reviewRoutes);
router.use('/service-rates', serviceRatesRoutes);

export default router;
