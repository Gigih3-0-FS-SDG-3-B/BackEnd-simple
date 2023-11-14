import { Router } from 'express';
import * as userController from '../controllers/user/userController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API operations related to users
 */
const router = Router();


/**
 * @swagger
 * /user/{user_id}:
 *   get:
 *     summary: Get user details by user ID.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User details
 */
router.get('/:user_id', authenticateUser, userController.getSingleUserController);

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user.
 *     tags: [User]
 *     requestBody:
 *       description: User data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               birth_date:
 *                 type: string
 *                 format: date
 *                 example: '1990-01-01'
 *               first_name:
 *                 type: string
 *                 example: 'John'
 *               last_name:
 *                 type: string
 *                 example: 'Doe'
 *               email:
 *                 type: string
 *                 format: email
 *                 example: 'john.doe@example.com'
 *               password:
 *                 type: string
 *                 example: 'password123'
 *               address:
 *                 type: string
 *                 example: '123 Main St, City'
 *               phone_number:
 *                 type: string
 *                 example: '+1234567890'
 *               profile_picture_url:
 *                 type: string
 *                 format: url
 *                 example: 'https://example.com/profile.jpg'
 *     responses:
 *       200:
 *         description: User created successfully
 */
router.post('/', userController.createUserController);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Log in a user.
 *     tags: [Authentication]
 *     requestBody:
 *       description: User credentials for login
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: User created successfully
 */
router.post('/login', userController.loginUserController);

/**
 * @swagger
 * /user/{user_id}:
 *   put:
 *     summary: Update user profile.
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated user profile data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 example: John
 *               last_name:
 *                 type: string
 *                 example: Doe
 *               address:
 *                 type: string
 *                 example: 123 Main St
 *               phone_number:
 *                 type: string
 *                 example: 123-456-7890
 *     responses:
 *       200:
 *         description: User profile updated successfully
 */
router.put('/:user_id', authenticateUser, userController.updateUserProfileController);

export default router;