import { Router } from 'express';
import * as serviceRatesController from '../controllers/serviceRates/serviceRatesController.js';

const router = Router();

router.get('/:service_id/rates', serviceRatesController.getServiceRatesController);
router.post('/:service_id/rates', serviceRatesController.createServiceRatesController);

export default router;
