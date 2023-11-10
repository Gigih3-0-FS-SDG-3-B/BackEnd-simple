import { Router } from 'express';
import * as reviewController from '../controllers/review/reviewController.js';

const router = Router();

router.post('/:order_id', reviewController.createReviewController);

export default router;