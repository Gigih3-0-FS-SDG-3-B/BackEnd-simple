import { Router } from 'express';
import * as caregiverController from '../controllers/caregiver/caregiverController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

/**
 * @swagger
 * tags:
 *   name: Caregiver
 *   description: API operations related to caregivers
 */
const router = Router();

/**
 * @swagger
 * /caregiver/search:
 *   get:
 *     summary: Filter caregivers by date range
 *     description: Retrieve a list of available caregivers within the specified date range.
 *     tags: [Caregiver]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: start_date
 *         schema:
 *           type: string
 *         required: true
 *         description: The start date of the range
 *       - in: query
 *         name: end_date
 *         schema:
 *           type: string
 *         required: true
 *         description: The end date of the range
 *     responses:
 *       200:
 *         description: A list of available caregivers within the specified date range.
 *         content:
 *           application/json:
 *             example:
 *               - caregiver_id: "2b6df3ec-5fdf-4467-84a9-c3a1888aacbe"
 *                 created_at: "2023-10-27T14:57:34.790Z"
 *                 education_id: 2
 *                 year_experience: 10
 *                 events: []
 *                 orders: []
 *                 user_id: "c5273ff2-ae05-4849-bd1b-3fce91ba4c54"
 *                 birth_date: "2000-01-01T00:00:00.000Z"
 *                 first_name: "Felix Caregiver 4"
 *                 last_name: null
 *                 email: "felix@example.com"
 *                 password: "yourpassword"
 *                 address: "123 Main St"
 *                 phone_number: "123-456-7890"
 *                 profile_picture_url: null
 *               - caregiver_id: "2dda93e6-2221-47ca-8682-4a6c2808f2bc"
 *                 created_at: "2023-11-07T07:43:53.305Z"
 *                 education_id: null
 *                 year_experience: 1
 *                 events: []
 *                 orders: []
 *                 user_id: "f68cad02-39e3-4ff9-b3a3-67c3ec97ea39"
 *                 birth_date: "2001-10-11T00:00:00.000Z"
 *                 first_name: "care"
 *                 last_name: "gicer test"
 *                 email: "care@giver.com"
 *                 password: "123456"
 *                 address: "jalan"
 *                 phone_number: "123456"
 *                 profile_picture_url: "ini_url_picture"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred {error message}
 */
router.get('/search', authenticateUser, caregiverController.filterCaregiversByDateController);

/**
 * @swagger
 * /caregiver/{caregiver_id}:
 *   get:
 *     summary: Get caregiver details by caregiver ID.
 *     tags: [Caregiver]
 *     security:
 *       - bearerAuth: []
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
router.get('/:caregiver_id', authenticateUser, caregiverController.getSingleCaregiverDetailController);


/**
 * @swagger
 * /caregiver:
 *   post:
 *     summary: Create a new caregiver.
 *     tags: [Caregiver]
 *     security:
 *       - bearerAuth: []
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
router.post('/', authenticateUser, caregiverController.createCaregiverController);

/**
 * @swagger
 * /caregiver/{caregiver_id}/schedule:
 *   get:
 *     summary: Get caregiver's available schedule
 *     description: Retrieves the available schedule for a specific caregiver.
 *     tags: [Caregiver]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: caregiver_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the caregiver.
 *     responses:
 *       200:
 *         description: A list of available schedule dates for the caregiver.
 *         content:
 *           application/json:
 *             example:
 *               - "2023-11-18"
 *               - "2023-11-20"
 *               - "2023-11-22"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred {error message}
 */
router.get('/schedule/:caregiver_id', authenticateUser, caregiverController.getCaregiverScheduleController);

export default router;