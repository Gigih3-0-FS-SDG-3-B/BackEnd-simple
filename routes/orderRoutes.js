import { Router } from 'express';
import * as orderController from '../controllers/order/orderController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: API operations related to orders
 */
const router = Router();

/**
 * @swagger
 * /order:
 *   get:
 *     summary: Get all orders for a user.
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: user_id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of orders for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   // Include properties of each order here
 */
router.get('/', authenticateUser, orderController.getAllOrdersByUserController)

/**
 * @swagger
 * /order/{order_id}:
 *   get:
 *     summary: Get details of a specific order.
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: order_id
 *         required: true
 *         description: Order ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Details of the specified order
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order_id:
 *                   type: string
 *                   example: '327a7543-c914-416b-ba4f-382901c17168'
 *                 caregiver_id:
 *                   type: string
 *                   example: 'bed0e533-4e8f-4057-8019-2f88403e0630'
 *                 user_id:
 *                   type: string
 *                   example: '61fe6e73-4858-465a-8058-fa8a212b133e'
 *                 order_status:
 *                   type: integer
 *                   example: 0
 *                 received_timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: '2023-11-12T06:03:25.713Z'
 *                 date_start:
 *                   type: string
 *                   format: date-time
 *                   example: '2023-11-13T00:00:00.000Z'
 *                 date_end:
 *                   type: string
 *                   format: date-time
 *                   example: '2023-11-14T00:00:00.000Z'
 *                 price:
 *                   type: number
 *                   example: 50
 *                 address:
 *                   type: string
 *                   example: '123 Main St, City'
 *                 users:
 *                   type: object
 *                   properties:
 *                     user_id:
 *                       type: string
 *                       example: '61fe6e73-4858-465a-8058-fa8a212b133e'
 *                     caregiver_id:
 *                       type: null
 *                     birth_date:
 *                       type: string
 *                       format: date-time
 *                       example: '2020-02-10T00:00:00.000Z'
 *                     first_name:
 *                       type: string
 *                       example: 'Gigih'
 *                     last_name:
 *                       type: null
 *                     email:
 *                       type: string
 *                       example: 'gigih@example.com'
 *                     password:
 *                       type: string
 *                       example: 'g1g1h'
 *                     address:
 *                       type: string
 *                       example: '123 Main St'
 *                     phone_number:
 *                       type: string
 *                       example: '123-456-7890'
 *                     profile_picture_url:
 *                       type: string
 *                       example: 'test'
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                       example: '2023-11-09T08:08:03.860Z'
 *                 caregivers:
 *                   type: object
 *                   properties:
 *                     caregiver_id:
 *                       type: string
 *                       example: 'bed0e533-4e8f-4057-8019-2f88403e0630'
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                       example: '2023-10-22T17:04:55.655Z'
 *                     education_id:
 *                       type: integer
 *                       example: 2
 *                     year_experience:
 *                       type: integer
 *                       example: 10
 */
router.get('/:order_id', authenticateUser, orderController.getOneOrderController);

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new order.
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Order data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               caregiver_id:
 *                 type: string
 *                 example: '12345'
 *               user_id:
 *                 type: string
 *                 example: '67890'
 *               date_start:
 *                 type: string
 *                 format: date-time
 *                 example: '2023-01-01T00:00:00Z'
 *               date_end:
 *                 type: string
 *                 format: date-time
 *                 example: '2023-01-02T00:00:00Z'
 *               price:
 *                 type: number
 *                 example: 50.0
 *               address:
 *                 type: string
 *                 example: '123 Main St, City'
 *               serviceIds:
 *                 type: array
 *                 items:
 *                   type: int
 *                 example: [1,2]
 *     responses:
 *       200:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order_id:
 *                   type: string
 *                   example: '327a7543-c914-416b-ba4f-382901c17168'
 *                 caregiver_id:
 *                   type: string
 *                   example: 'bed0e533-4e8f-4057-8019-2f88403e0630'
 *                 user_id:
 *                   type: string
 *                   example: '61fe6e73-4858-465a-8058-fa8a212b133e'
 *                 order_status:
 *                   type: integer
 *                   example: 0
 *                 received_timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: '2023-11-12T06:03:25.713Z'
 *                 date_start:
 *                   type: string
 *                   format: date-time
 *                   example: '2023-11-13T00:00:00.000Z'
 *                 date_end:
 *                   type: string
 *                   format: date-time
 *                   example: '2023-11-14T00:00:00.000Z'
 *                 price:
 *                   type: number
 *                   example: 50
 *                 address:
 *                   type: string
 *                   example: '123 Main St, City'
 *                 serviceIds:
 *                   type: array
 *                   items:
 *                     type: integer
 *                   example: [1,2]
 */
router.post('/', authenticateUser, orderController.createOrderController);

/**
 * @swagger
 * /order/{order_id}:
 *   put:
 *     summary: Update details of a specific order.
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: order_id
 *         required: true
 *         description: Order ID
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated order data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order_status:
 *                 type: integer
 *                 example: 200
 *               date_start:
 *                 type: string
 *                 format: date-time
 *                 example: '2023-11-15T00:00:00.000Z'
 *               date_end:
 *                 type: string
 *                 format: date-time
 *                 example: '2023-11-16T00:00:00.000Z'
 *               price:
 *                 type: number
 *                 example: 60.0
 *               address:
 *                 type: string
 *                 example: '456 Main St, City'
 *     responses:
 *       200:
 *         description: Order updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order_id:
 *                   type: string
 *                   example: '327a7543-c914-416b-ba4f-382901c17168'
 *                 caregiver_id:
 *                   type: string
 *                   example: 'bed0e533-4e8f-4057-8019-2f88403e0630'
 *                 user_id:
 *                   type: string
 *                   example: '61fe6e73-4858-465a-8058-fa8a212b133e'
 *                 order_status:
 *                   type: integer
 *                   example: 200
 *                 received_timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: '2023-11-12T06:03:25.713Z'
 *                 date_start:
 *                   type: string
 *                   format: date-time
 *                   example: '2023-11-15T00:00:00.000Z'
 *                 date_end:
 *                   type: string
 *                   format: date-time
 *                   example: '2023-11-16T00:00:00.000Z'
 *                 price:
 *                   type: number
 *                   example: 60
 *                 address:
 *                   type: string
 *                   example: '456 Main St, City'
 */
router.put('/:order_id', authenticateUser, orderController.updateOrderController);

export default router;