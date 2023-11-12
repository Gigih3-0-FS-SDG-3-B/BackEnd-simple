import { Router } from 'express';
import * as serviceRatesController from '../controllers/serviceRates/serviceRatesController.js';

/**
 * @swagger
 * tags:
 *   name: Service Rates
 *   description: API operations related to service rates
 */
const router = Router();

/**
 * @swagger
 * /service/{service_id}/rates:
 *   get:
 *     summary: Get current service rates for a service.
 *     tags: [Service Rates]
 *     parameters:
 *       - in: path
 *         name: service_id
 *         required: true
 *         description: Service ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Current service rates for the service
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Include properties of the current service rates here
 */
router.get('/:service_id/rates', serviceRatesController.getServiceRatesController);

/**
 * @swagger
 * /service/{service_id}/rates:
 *   post:
 *     summary: Create new service rates.
 *     tags: [Service Rates]
 *     parameters:
 *       - in: path
 *         name: service_id
 *         required: true
 *         description: Service ID
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Service rates data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               service_price:
 *                 type: number
 *                 example: 50.0
 *     responses:
 *       200:
 *         description: Service rates created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Include properties of the created service rates here
 */
router.post('/:service_id/rates', serviceRatesController.createServiceRatesController);

export default router;
