import { Router } from 'express';
import * as reviewController from '../controllers/review/reviewController.js';

/**
 * @swagger
 * tags:
 *   name: Review
 *   description: API operations related to reviews
 */
const router = Router();

/**
 * @swagger
 * /review/{order_id}:
 *   post:
 *     summary: Create a new review for an order.
 *     tags: [Review]
 *     parameters:
 *       - in: path
 *         name: order_id
 *         required: true
 *         description: Order ID
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Review data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               review:
 *                 type: string
 *                 example: 'Great service!'
 *               review_rating:
 *                 type: integer
 *                 minimum: 0
 *                 maximum: 5
 *                 example: 4
 *     responses:
 *       200:
 *         description: Review created successfully
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               order_id: '327a7543-c914-416b-ba4f-382901c17168'
 *               review: 'Great service!'
 *               review_rating: 4
 *               created_at: '2023-11-12T06:32:32.000Z'
 */
router.post('/:order_id', reviewController.createReviewController);

export default router;