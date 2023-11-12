import { Router } from "express";
import * as eventController from "../controllers/events/eventController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: API endpoints for managing events
 */
const router = Router();

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Event data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               caregiver_id:
 *                 type: string
 *                 description: The ID of the caregiver associated with the event.
 *                 example: '123'
 *               start_date:
 *                 type: string
 *                 format: date-time
 *                 description: The start date and time of the event.
 *                 example: '1990-01-01'
 *               end_date:
 *                 type: string
 *                 format: date-time
 *                 description: The end date and time of the event.
 *                 example: '1990-01-01'
 *     responses:
 *       201:
 *         description: Event created successfully
 *         content:
 *           application/json:
 *             example:
 *               id: 123
 *               caregiver_id: '123'
 *               start_date: '1990-01-01T00:00:00Z'
 *               end_date: '1990-01-01T01:00:00Z'
 */
router.post("/", authenticateUser, eventController.createEventController);

/**
 * @swagger
 * /events/{eventId}:
 *   delete:
 *     summary: Cancel an event
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         description: The unique identifier of the event to be canceled.
 *         schema:
 *           type: string
 */
router.delete(
  "/:eventId",
  authenticateUser,
  eventController.cancelEventController
);

export default router;
