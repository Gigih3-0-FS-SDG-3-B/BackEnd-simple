import { Router } from 'express';
import * as caregiverController from '../controllers/caregiver/caregiverController.js';

/**
 * @swagger
 * tags:
 *   name: Caregiver
 *   description: API operations related to caregivers
 */
const router = Router();


/**
 * @swagger
 * /caregiver/{caregiver_id}:
 *   get:
 *     summary: Get caregiver details by caregiver ID.
 *     tags: [Caregiver]
 *     parameters:
 *       - in: path
 *         name: caregiver_id
 *         required: true
 *         description: Caregiver ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Caregiver details
 */
router.get('/:caregiver_id', caregiverController.getSingleCaregiverDetailController);


/**
 * @swagger
 * /caregiver:
 *   post:
 *     summary: Create a new caregiver.
 *     tags: [Caregiver]
 *     requestBody:
 *       description: Caregiver data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 example: 'Swagger API'
 *               last_name:
 *                 type: string
 *                 example: 'Test'
 *               birth_date:
 *                 type: string
 *                 format: date
 *                 example: '1990-01-01'
 *               email:
 *                 type: string
 *                 format: email
 *                 example: 'swaggerapi@example.com'
 *               password:
 *                 type: string
 *                 example: 'password123'
 *               address:
 *                 type: string
 *                 example: '123 Main St, City'
 *               phone_number:
 *                 type: string
 *                 example: '+1234567890'
 *               year_experience:
 *                 type: integer
 *                 example: 5
 *               profile_picture_url:
 *                 type: string
 *                 format: url
 *                 example: 'https://example.com/profile.jpg'
 *               education_id:
 *                 type: int
 *                 example: 0
 *     responses:
 *       200:
 *         description: Caregiver created successfully
 */
router.post('/', caregiverController.createCaregiverController);

export default router;