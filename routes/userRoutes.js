import { Router } from 'express';
import * as userController from '../controllers/user/userController.js';
import { authenticateUser } from '../middlewares/authMiddleware.mjs';

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
router.get('/:user_id', userController.getSingleUserController);

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


router.put('/:user_id', authenticateUser, userController.updateUserProfileController);

export default router;