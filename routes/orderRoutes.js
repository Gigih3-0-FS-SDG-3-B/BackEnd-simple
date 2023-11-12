import { Router } from 'express';
import * as orderController from '../controllers/order/orderController.js';

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
 *     parameters:
 *       - in: path
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
router.get('/', orderController.getAllOrdersByUserController)

/**
 * @swagger
 * /order/{order_id}:
 *   get:
 *     summary: Get details of a specific order.
 *     tags: [Order]
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
 *                 // Include properties of the order here
 */
router.get('/:order_id', orderController.getOneOrderController);

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new order.
 *     tags: [Order]
 *     requestBody:
 *       description: Order data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Include properties of the order data here
 *     responses:
 *       200:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Include properties of the created order here
 */
router.post('/', orderController.createOrderController);

/**
 * @swagger
 * /order/{order_id}:
*   put:
*     summary: Update details of a specific order.
*     tags: [Order]
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
*               // Include properties of the updated order data here
*     responses:
*       200:
*         description: Order updated successfully
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 // Include properties of the updated order here
*/
router.put('/:order_id', orderController.updateOrderController);

export default router;