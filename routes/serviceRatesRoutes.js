import { Router } from "express";
import * as serviceRatesController from "../controllers/serviceRates/serviceRatesController.js";

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
 *              example:
 *               id: 3
 *               service_id: 1
 *               service_price: 294
 *               created_at: '2023-10-27T18:54:20.307Z'
 */
router.get(
  "/:service_id/rates",
  serviceRatesController.getServiceRatesController
);

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
 *              example:
 *               id: 4
 *               service_id: 1
 *               service_price: 100
 *               created_at: '2023-11-12T06:38:30.941Z'
 */
router.post(
  "/:service_id/rates",
  serviceRatesController.createServiceRatesController
);

export default router;
